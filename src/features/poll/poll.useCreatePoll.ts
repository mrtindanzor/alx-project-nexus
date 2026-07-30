import { useCallback, useState } from "react";
import { type CreatePollDTO, pollService } from "@/features/poll";
import { useResponse } from "@/shared/hooks/useResponse";
import { createPollValidator } from "./poll.validators";

const defaultPoll = (): CreatePollDTO => ({
  title: "",
  type: "single",
  options: [{ answer: "" }, { answer: "" }],
});

export function useCreatePoll() {
  const [pollId, setPollId] = useState("");
  const [poll, setPoll] = useState<CreatePollDTO>(() => defaultPoll());

  const { handleSubmit, setResponse, ...props } = useResponse({
    data: poll,
  });

  const addNewOption = useCallback(() => {
    setPoll((poll) => ({
      ...poll,
      options: [...poll.options, { answer: "" }],
    }));
  }, []);

  const removeOption = useCallback((index: number) => {
    setPoll((prevPoll) => ({
      ...prevPoll,
      options: prevPoll.options.filter((_, i) => index !== i),
    }));
  }, []);

  const setValue = useCallback(
    (value: string, key: keyof CreatePollDTO, index?: number) => {
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

  const savePoll = handleSubmit(async (data) => {
    const parsed = createPollValidator.safeParse(data);
    if (!parsed.success) return;

    const { id: pollId, ...status } = await pollService.create(parsed.data);

    setResponse(status);

    setPoll(defaultPoll());
    setPollId(pollId);
  });

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
