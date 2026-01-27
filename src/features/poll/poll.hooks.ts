import { useCallback, useState } from "react";
import type { PostPollProps } from "@/domain/poll";

export function usePollForm() {
  const [poll, setPoll] = useState<PostPollProps>({
    title: "",
    options: [{ answer: "", id: Date.now().toString() }],
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

  return { addNewOption, removeOption, poll, setValue };
}
