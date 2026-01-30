"use client";

import { ChartBarIcon, ClockIcon } from "@heroicons/react/24/solid";
import { ArrowRight, Share2, ThumbsUp } from "lucide-react";
import { Button, Pill, StyledLink } from "@/shared/ui/primitive/Buttons";
import { ErrorCard } from "@/shared/ui/primitive/ErrorCard";
import Spinner from "@/shared/ui/primitive/Spinner";
import { cn } from "@/shared/utils/cn";
import { renderText } from "@/shared/utils/textFormat";
import { usePollVote } from "../poll.vote.hooks";
import type { PollButtonProps, PollVoteCardProps } from "../poll-vote.types";

export function PollVoteCard({ pollId }: PollVoteCardProps) {
  const {
    title,
    time,
    options,
    selected,
    setSelected,
    onSubmit,
    msgCtnRef,
    formState: { error, success, message, submitting },
    voted,
  } = usePollVote({
    pollId,
  });
  const VoteIcon = voted ? ThumbsUp : ArrowRight;

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto py-4 px-4 md:max-w-3xl grid h-fit gap-y-8 rounded-md mt-5 border border-t-4 border-t-accent border-neutral/20 bg-secondary-900 drop-shadow-md"
    >
      <header>
        <h2 className="text-2xl mb-0.5 font-sans font-medium text-neutral/90 tracking-tight">
          {title}
        </h2>
        <div className="flex text-neutral/60 items-center gap-x-1">
          <ClockIcon className="size-4" />
          <span className="ext-sm">
            {renderText("", time.charAt(0).toUpperCase(), time.slice(1))}
          </span>
        </div>
      </header>

      <div>
        <h3 className="text-lg mb-1 font-medium text-neutral/60">
          Make a choice:
        </h3>

        <ul className="grid gap-y-0.5">
          {options.map((option) => (
            <PollButton
              {...option}
              key={option._id}
              selected={selected}
              setSelected={setSelected}
              disabled={voted}
            />
          ))}
        </ul>
      </div>

      <footer className="grid gap-y-2 gap-x-4 w-full sm:grid-cols-[auto_1fr]">
        <Button
          pad="lg"
          y="center"
          variant={!voted ? "sky" : "ghost-sky"}
          hover="none"
          className="gap-x-2 px-8 col"
          w="full"
          x="center"
          disabled={voted || submitting}
        >
          {submitting ? (
            <Spinner className="size-4 border-neutral border-t-transparent mx-5" />
          ) : (
            <>
              {voted ? "Voted" : "Vote"}
              <VoteIcon className="size-4 stroke-3" />
            </>
          )}
        </Button>
        <div className="grid grid-cols-2 gap-x-2 *:w-full sm:*:w-fit sm:flex sm:justify-between *:gap-x-1 w-full">
          <StyledLink
            href={`/poll/${pollId}`}
            x="center"
            y="center"
            pad="lg"
            hover="light"
          >
            <ChartBarIcon className="size-4 " />
            Show Results
          </StyledLink>
          <Button x="center" y="center" pad="lg" hover="light">
            <Share2 className="size-4" />
            Share
          </Button>
        </div>
      </footer>
      <ErrorCard
        ref={msgCtnRef}
        message={message}
        success={success}
        error={error}
      />
    </form>
  );
}

function PollButton({
  answer,
  _id,
  selected,
  setSelected,
  total: _t,
  className,
  ...props
}: PollButtonProps) {
  return (
    <Button
      type="button"
      onClick={() => setSelected(_id)}
      variant="none"
      hover="ghost-light"
      pad="lg"
      w="full"
      y="center"
      className={cn("gap-x-2 px-1", className)}
      {...props}
    >
      <Pill
        className="rounded-full aspect-square size-5!"
        pad="xs"
        x="center"
        y="center"
        variant={selected === _id ? "sky" : "light"}
        hover={selected === _id ? "sky" : "ghost-light"}
      >
        <span className="grid size-2 aspect-square! rounded-full bg-secondary-900"></span>
      </Pill>
      {answer}
    </Button>
  );
}
