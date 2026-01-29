import { useCallback, useState } from "react";
import type { PostPollProps } from "@/domain/poll";
import { nextDataFetch } from "@/infra/nextFetch";
import { useResponse } from "@/shared/hooks/useResponse";
import { newPollSchema } from "./poll.schemas";

const defaultPoll = {
  title: "",
  options: [
    { answer: "", id: Date.now().toString() },
    { answer: "", id: (Date.now() + 2).toString() },
  ],
};

export function usePollForm() {
  const [pollId, setPollId] = useState("");
  const [poll, setPoll] = useState<PostPollProps>(defaultPoll);

  const { handleSubmit, setResponse, ...props } = useResponse({
    data: poll,
  });

  const addNewOption = useCallback(() => {
    setPoll((poll) => ({
      ...poll,
      options: [...poll.options, { answer: "", id: Date.now().toString() }],
    }));
  }, []);

  const removeOption = useCallback((index: number) => {
    setPoll((prevPoll) => ({
      ...prevPoll,
      options: prevPoll.options.filter((_, i) => index !== i),
    }));
  }, []);

  const setValue = useCallback(
    (value: string, key: "title" | "answer", index?: number) => {
      setPoll((poll) => {
        if (key === "title") return { ...poll, title: value };
        if (!index && index !== 0) return poll;

        return {
          ...poll,
          options: poll.options.map((answer, i) => {
            if (i !== index) return answer;

            return {
              ...answer,
              answer: value,
            };
          }),
        };
      });
    },
    [],
  );

  const onSubmit = useCallback(
    async (data: PostPollProps) => {
      const nextFetch = await nextDataFetch<{ id: string }>({
        uri: "/poll",
        payload: data,
      });
      await nextFetch.fetch(newPollSchema);

      setResponse(nextFetch.fetchStatus);

      if (nextFetch.isSuccess()) {
        setPoll(defaultPoll);
        setPollId(nextFetch.data.id);
      }
    },
    [setResponse],
  );

  const savePoll = handleSubmit(onSubmit);

  return {
    addNewOption,
    removeOption,
    poll,
    setValue,
    pollId,
    savePoll,
    ...props,
  };
}
