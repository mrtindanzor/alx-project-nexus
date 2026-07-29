import {
  type CreatePollDTO,
  type PostPollProps,
  pollService,
} from "@/domain/poll";
import { useResponse } from "@/shared/hooks/useResponse";
import { useCallback, useState } from "react";
import { createPollValidator } from "./poll.validators";

const defaultPoll = (): CreatePollDTO => ({
  title: "",
  type: "single",
  options: [
    { answer: "", _id: crypto.randomUUID() },
    { answer: "", _id: crypto.randomUUID() },
  ],
});

export function useCreatePoll() {
  const [pollId, setPollId] = useState("");
  const [poll, setPoll] = useState<PostPollProps>(() => defaultPoll());

  const { handleSubmit, setResponse, ...props } = useResponse({
    data: poll,
  });

  const addNewOption = useCallback(() => {
    setPoll((poll) => ({
      ...poll,
      options: [...poll.options, { answer: "", _id: Date.now().toString() }],
    }));
  }, []);

  const removeOption = useCallback((index: number) => {
    setPoll((prevPoll) => ({
      ...prevPoll,
      options: prevPoll.options.filter((_, i) => index !== i),
    }));
  }, []);

  const setValue = useCallback(
    (value: string, key: keyof PostPollProps, index?: number) => {
      setPoll((poll) => {
        if (key !== "options") return { ...poll, [key]: value };
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

  const onSubmit = handleSubmit(async (data) => {
    const parsed = createPollValidator.parse(data);
    const res = await pollService.create(parsed);

    setResponse(res);

    if (res.success) {
      setPoll(defaultPoll());
      setPollId(res.data?.id);
    }
  });

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
