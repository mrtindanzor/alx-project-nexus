"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  type InfinitePollProps,
  POLL_KEY,
  POLLS_KEY_PAGINATED,
  type PollProps,
  type PollResultProps,
  pollsStateUpdater,
} from "@/domain/poll";
import { usePollsSocket } from "@/hooks/usePollsSocket";

export function PollsListener() {
  const socket = usePollsSocket();
  const qc = useQueryClient();

  useEffect(() => {
    const { updateInifinitePollsResults, updatePollResult } = pollsStateUpdater;

    const updatePolls = (liveResults: PollResultProps) => {
      qc.setQueryData<InfinitePollProps>(POLLS_KEY_PAGINATED, (cache) => {
        if (!cache) return cache;

        return { ...updateInifinitePollsResults(cache, liveResults) };
      });

      qc.setQueryData<PollProps>([...POLL_KEY, liveResults.pollId], (cache) => {
        if (!cache) return cache;

        return { ...updatePollResult(cache, liveResults) };
      });
    };

    socket.on("live-results", updatePolls);

    return () => {
      socket.off("live-results", updatePolls);
    };
  }, [socket, qc]);

  return null;
}
