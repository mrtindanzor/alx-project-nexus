import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useLayoutEffect, useState } from "react";
import { fetchPollVote, POLL_KEY, type PollProps } from "@/domain/poll";
import { usePollsSocket } from "@/hooks/usePollsSocket";
import { useResponse } from "@/shared/hooks/useResponse";
import { formatToDaysAgo } from "@/shared/utils/textFormat";
import { zodErrorFilter } from "@/shared/utils/zodErrorFilter";
import { pollVoteSchema } from "./poll.vote.schema";

type UsePollVote = {
  pollId: string;
};

export function usePollVote({ pollId }: UsePollVote) {
  const socket = usePollsSocket();
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState("");
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [...POLL_KEY, pollId],
    queryFn: () => fetchPollVote(pollId),
    initialData: () => queryClient.getQueryData([...POLL_KEY, pollId]),
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  const {
    setResponse,
    handleSubmit,
    clear: { schClear },
    formState,
    setSubmitting,
    ...resProps
  } = useResponse({
    data: { answer: selected, pollId, optionId: selected },
    callSubmitted: false,
  });

  const { createdAt, ...pollDetails } = data || ({} as PollProps);
  const [time, setTime] = useState(formatToDaysAgo(createdAt));

  const handleVote = useCallback(
    async (data: { pollId: string; answer: string; optionId: string }) => {
      const [parsed, parsedError] = zodErrorFilter(pollVoteSchema, data);

      if (parsedError || !parsed)
        return setResponse({
          error: true,
          message: parsedError ?? "Form validation failed.",
        });

      socket.emit("vote", parsed, ({ message, error }) => {
        if (error) setResponse({ message, error, success: !error });
        if (!error) setVoted(true);

        schClear();
        setSubmitting(false);
      });
    },
    [socket, setResponse, setSubmitting, schClear],
  );

  const onSubmit = handleSubmit(handleVote);

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatToDaysAgo(createdAt));
    }, 60_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [createdAt]);

  return {
    time,
    ...pollDetails,
    ...resProps,
    selected,
    setSelected,
    onSubmit,
    formState,
    voted,
  };
}
