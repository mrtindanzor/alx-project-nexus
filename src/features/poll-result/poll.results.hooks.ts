import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLayoutEffect, useMemo, useState } from "react";
import { fetchPollResults, POLL_KEY, type PollProps } from "@/domain/poll";
import { formatToDaysAgo } from "@/shared/utils/textFormat";

type UsePollResults = {
  pollId: string;
};

export function usePollResults({ pollId }: UsePollResults) {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [...POLL_KEY, pollId],
    queryFn: () => fetchPollResults(pollId),
    initialData: () => queryClient.getQueryData([...POLL_KEY, pollId]),
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  const { createdAt, options, ...pollDetails } = data || ({} as PollProps);
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
