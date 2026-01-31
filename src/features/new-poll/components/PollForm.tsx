"use client";

import { Plus } from "lucide-react";
import { useId } from "react";
import { Dropdown } from "@/shared/features/Dropdown";
import { PollLinkClipboard } from "@/shared/features/PollLinkClipboard";
import { Button, CloseButton } from "@/shared/ui/primitive/Buttons";
import { ErrorCard } from "@/shared/ui/primitive/ErrorCard";
import { Input } from "@/shared/ui/primitive/Input";
import { cn } from "@/shared/utils/cn";
import { toCapitalized } from "@/shared/utils/textFormat";
import { POLL_TYPES } from "../contants";
import type { PollInputProps } from "../new-poll.types";
import { usePollForm } from "../poll.hooks";

export function PollForm() {
  const {
    addNewOption,
    removeOption,
    poll: { title, options, type },
    setValue,
    savePoll,
    formState: { message, error, success },
    msgCtnRef,
    pollId,
  } = usePollForm();

  return (
    <form
      onSubmit={savePoll}
      className="py-4 px-4 rounded-md grid h-fit space-y-4 bg-secondary-900 section max-w-xl"
    >
      <ErrorCard ref={msgCtnRef} {...{ error, message, success }} />

      {pollId && (
        <div className="bg-secondary grid gap-y-6 rounded-md px-4 py-8 mb-4 outline-2 outline-muted-stone">
          <PollLinkClipboard
            pollId={pollId}
            slug="vote"
            title="Vote page link"
          />
          <PollLinkClipboard
            pollId={pollId}
            slug="poll"
            title="Results page link"
          />
        </div>
      )}

      <PollInput
        label="Title"
        value={title}
        onChange={(e) => setValue(e.target.value, "title")}
        placeholder="Type your question here"
        variant="outline"
      />

      <div className="grid gap-y-1 mt-4">
        <span>Type</span>

        <Dropdown
          items={POLL_TYPES.map((type) => ({
            title: `${toCapitalized(type)} Choice`,
            value: type,
            hover: "light",
          }))}
          title={`${toCapitalized(type)} Choice`}
          setValue={(value) => setValue(value, "type")}
          className="w-full"
          buttonProps={{
            pad: "lg",
            variant: "ghost-light",
            hover: "light",
            rad: "lg",
            className: "px-4 bg-secondary outline-2 outline-muted-stone",
          }}
          dropDownListClassName="bg-secondary drop-shadow-2xl outline-2 outline-muted-stone"
        />
      </div>

      <div className="mt-8">
        <span>Answer Options</span>
        {options.map((option, index) => (
          <div className="relative" key={option._id}>
            <PollInput
              label=""
              value={option.answer}
              placeholder={`Option ${index + 1}`}
              onChange={(e) => setValue(e.target.value, "options", index)}
              className="*:last:pr-8"
            />
            {options.length > 2 && (
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
            hover="light"
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
        className="py-2.5! w-full bg-secondary"
      />
    </label>
  );
}
