"use client";

import { Plus } from "lucide-react";
import { useId } from "react";
import { Button, CloseButton } from "@/shared/ui/Buttons";
import { Input } from "@/shared/ui/Input";
import { cn } from "@/shared/utils/cn";
import { usePollForm } from "../poll.hooks";
import type { PollInputProps } from "../poll.types";

export function PollForm() {
  const {
    addNewOption,
    removeOption,
    poll: { title, options },
    setValue,
  } = usePollForm();

  return (
    <form className="py-4 px-4 rounded-md bg-neutral/10 section max-w-xl">
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

function PollInput({ label, className, ...props }: PollInputProps) {
  const id = useId();

  return (
    <div className={cn("grid h-fit gap-y-2 *:last:rounded-md", className)}>
      <span id={id} className="font-bold tracking-wide">
        {label}
      </span>
      <Input
        aria-labelledby={id}
        variant="muted"
        {...props}
        className="py-2.5! w-full"
      />
    </div>
  );
}
