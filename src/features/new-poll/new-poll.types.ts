import type { InputProps } from "@/shared/ui/primitive/Input";

export type PollInputProps = InputProps & {
  label: string;
};

export type CreatePollStepProps = {
  title: string;
  description: string;
};

export type SeePollLiveProps = {
  pollId: string;
};
