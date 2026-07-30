"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { type PollResults, type PollType, pollQuery } from "@/features/poll";
import { usePollsSocket } from "@/hooks/usePollsSocket";

export function PollsListener() {
  const socket = usePollsSocket();
  const qc = useQueryClient();

  useEffect(() => {
    const updatePolls = (liveResults: PollResults) => {
      const query = pollQuery(liveResults.pollId);

      qc.setQueryData<PollType>(query.queryKey, (cache) => {
        if (!cache) return cache;

        return {
          ...cache,
          options: cache.options.map(({ id, ...option }) => ({
            ...option,
            id,
            total: liveResults.results[id] ?? option.total,
          })),
        };
      });
    };

    socket.on("live-results", updatePolls);

    return () => {
      socket.off("live-results", updatePolls);
    };
  }, [socket, qc]);

  return null;
}
