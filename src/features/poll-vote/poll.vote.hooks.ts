import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLayoutEffect, useMemo, useState } from "react";
import { fetchPoll, POLL_KEY, type PollProps } from "@/domain/poll";
import { formatToDaysAgo } from "@/shared/utils/textFormat";

type UsePollVote = {
  pollId: string;
};

export function usePollVote({ pollId }: UsePollVote) {
  const [selected, setSelected] = useState("");
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [...POLL_KEY, pollId],
    queryFn: () => fetchPoll(pollId),
    initialData: () => queryClient.getQueryData([...POLL_KEY, pollId]),
  });

  const { createdAt, ...pollDetails } = data || ({} as PollProps);
  const [time, setTime] = useState(formatToDaysAgo(createdAt));

  const totalPollVotes = useMemo(() => {
    if (!data) return 0;

    return data.options.reduce((prev, curr) => prev + curr.total, 0);
  }, [data]);

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatToDaysAgo(createdAt));
    }, 60_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [createdAt]);

  return { time, ...pollDetails, totalPollVotes, selected, setSelected };
}
