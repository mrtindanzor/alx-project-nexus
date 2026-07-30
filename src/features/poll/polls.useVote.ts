"use client";

import { useQuery } from "@tanstack/react-query";
import { useCallback, useLayoutEffect, useState } from "react";
import { type PollType, pollQuery } from "@/features/poll";
import { usePollsSocket } from "@/hooks/usePollsSocket";
import { useResponse } from "@/shared/hooks/useResponse";
import { fe } from "@/shared/utils/fe";
import { formatToDaysAgo } from "@/shared/utils/textFormat";
import { voteOnPollValidator } from "./poll.validators";

type UsePollVote = {
  pollId: string;
};

export function useVote({ pollId }: UsePollVote) {
  const [shareActive, setShareActive] = useState(false);
  const socket = usePollsSocket();
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const query = pollQuery(pollId);
  const { data } = useQuery({
    ...query,
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

  const { createdAt, type, ...pollDetails } = data || ({} as PollType);
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
      const parsed = voteOnPollValidator.safeParse(data);

      if (!parsed.success)
        return setResponse({
          error: true,
          message: fe(parsed.error) ?? "Form validation failed.",
        });

      socket.emit("vote", parsed.data, ({ message, error }) => {
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
