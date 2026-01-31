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
  const [shareActive, setShareActive] = useState(false);
  const socket = usePollsSocket();
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
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
    data: { pollId, votesIds: selected },
    callSubmitted: false,
  });

  const { createdAt, type, ...pollDetails } = data || ({} as PollProps);
  const [time, setTime] = useState(formatToDaysAgo(createdAt));

  const setVotes = useCallback(
    (id: string) => {
      setSelected((votes) => {
        if (type === "single") return id !== votes[0] ? [id] : votes;

        if (votes.includes(id)) return votes.filter((vote) => vote !== id);
        return [...votes, id];
      });
    },
    [type],
  );

  const handleVote = useCallback(
    async (data: { pollId: string; votesIds: string[] }) => {
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
    type,
    ...pollDetails,
    ...resProps,
    selected,
    setVotes,
    onSubmit,
    formState,
    voted,
    shareActive,
    setShareActive,
  };
}
