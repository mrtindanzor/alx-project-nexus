import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect, useMemo, useState } from "react";
import { type PollType, pollQuery } from "@/features/poll";
import { formatToDaysAgo } from "@/shared/utils/textFormat";

type UsePollResults = {
  pollId: string;
};

export function usePollResults({ pollId }: UsePollResults) {
  const query = pollQuery(pollId);
  const { data } = useQuery({
    ...query,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  const { createdAt, options, ...pollDetails } = data || ({} as PollType);
  const [time, setTime] = useState(formatToDaysAgo(createdAt));
  const totalVotes = useMemo(() => {
    return options.reduce((acc, curr) => acc + curr.total, 0);
  }, [options]);

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
    totalVotes,
    options: options.sort((a, b) => b.total - a.total),
    ...pollDetails,
  };
}
