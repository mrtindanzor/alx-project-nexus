"use client";

import { ArrowRight, Plus } from "lucide-react";
import { useId } from "react";
import { Button, CloseButton, StyledLink } from "@/shared/ui/primitive/Buttons";
import { ErrorCard } from "@/shared/ui/primitive/ErrorCard";
import { Input } from "@/shared/ui/primitive/Input";
import { cn } from "@/shared/utils/cn";
import type { PollInputProps, SeePollLiveProps } from "../new-poll.types";
import { usePollForm } from "../poll.hooks";

export function PollForm() {
  const {
    addNewOption,
    removeOption,
    poll: { title, options },
    setValue,
    savePoll,
    formState: { message, error, success },
    msgCtnRef,
    pollId,
  } = usePollForm();

  return (
    <form
      onSubmit={savePoll}
      className="py-4 px-4 rounded-md bg-neutral/10 section max-w-xl outline-2 outline-muted-stone"
    >
      {message && (
        <ErrorCard
          ref={msgCtnRef}
          {...{ error, message, success }}
          className="mb-4"
        />
      )}

      {pollId && <SeePollLive pollId={pollId} />}
      <PollInput
        label="Title"
        value={title}
        onChange={(e) => setValue(e.target.value, "title")}
        placeholder="Type your question here"
        variant="outline"
      />

      <div className="mt-8">
        <span>Answer Options</span>
        {options.map((option, index) => (
          <div className="relative" key={option.id}>
            <PollInput
              label=""
              value={option.answer}
              placeholder={`Option ${index + 1}`}
              onChange={(e) => setValue(e.target.value, "answer", index)}
              className="*:last:pr-8"
            />
            {options.length > 1 && (
              <CloseButton
                className="absolute bg-transparent top-1/2 -translate-y-2/4 right-2"
                close={() => removeOption(index)}
              />
            )}
          </div>
        ))}
        {options.length < 8 && (
          <Button
            type="button"
            y="center"
            className="ml-auto mt-2"
            onClick={addNewOption}
            rad="lg"
          >
            <Plus className="size-4 mr-2" /> Add another option
          </Button>
        )}
      </div>
      <Button
        variant="light"
        hover="sky"
        w="full"
        x="center"
        pad="lg"
        className="mt-10 text-lg"
      >
        Create poll
      </Button>
    </form>
  );
}

function SeePollLive({ pollId }: SeePollLiveProps) {
  return (
    <StyledLink
      href={`/poll/${pollId}`}
      className="gap-x-2 mt-2 mb-6 px-8"
      variant="ghost-sky"
      y="center"
      pad="lg"
      w="full"
      x="center"
    >
      See Poll <ArrowRight />
    </StyledLink>
  );
}

function PollInput({ label, className, ...props }: PollInputProps) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn("grid h-fit gap-y-2 *:last:rounded-md", className)}
    >
      <span className="font-bold tracking-wide">{label}</span>

      <Input
        id={id}
        type="text"
        variant="muted"
        {...props}
        className="py-2.5! w-full"
      />
    </label>
  );
}
