"use client";

import { ChartBarIcon, ClockIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";
import { Share2, ThumbsUp } from "lucide-react";
import { type PollOptionProps, useVote } from "@/features/poll";
import {
  FramerAnimatePosition,
  type FramerAnimatePositionProps,
} from "@/shared/features/Framer";
import { PollLinkClipboard } from "@/shared/features/PollLinkClipboard";
import { useAutoHide } from "@/shared/hooks/useAutoHide";
import {
  Button,
  type ButtonProps,
  Pill,
  StyledLink,
} from "@/shared/ui/primitive/Buttons";
import { ErrorCard } from "@/shared/ui/primitive/ErrorCard";
import Spinner from "@/shared/ui/primitive/Spinner";
import { cn } from "@/shared/utils/cn";
import { renderText } from "@/shared/utils/textFormat";

type PollVoteCardProps = {
  pollId: string;
};

export function VoteCard({ pollId }: PollVoteCardProps) {
  const {
    title,
    time,
    options,
    selected,
    setVotes,
    onSubmit,
    msgCtnRef,
    formState: { error, success, message, submitting },
    voted,
    type,
    setShareActive,
    shareActive,
  } = useVote({ pollId });
  const { captureRef: ref } = useAutoHide({
    isOpen: shareActive,
    setIsOpen: () => setShareActive(false),
    event: "click",
  });

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
        <h3 className="text-base mb-1 font-medium text-neutral/60">
          Make a choice {type === "multiple" && `( ${type} allowed )`}:
        </h3>

        <ul className="grid gap-y-0.5">
          {options.map((option) => (
            <PollVoteButton
              {...option}
              key={option.id}
              selected={selected}
              setVotes={setVotes}
              disabled={voted}
            />
          ))}
        </ul>
      </div>

      <footer className="grid gap-y-2 @container gap-x-4 w-full sm:grid-cols-[auto_1fr]">
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
              <ThumbsUp className="size-4 stroke-3" />
            </>
          )}
        </Button>
        <div className="grid @sm:grid-cols-[auto_1fr] mt-2 @sm:mt-0 gap-y-2 gap-x-2 *:w-full sm:*:w-fit sm:flex *:gap-x-1 w-full">
          <StyledLink
            href={`/poll/${pollId}`}
            x="center"
            y="center"
            pad="lg"
            hover="light"
          >
            <ChartBarIcon className="size-4" />
            Show Results
          </StyledLink>

          <div className="relative flex-1 flex">
            <AnimatePresence>
              {shareActive && <Share pollId={pollId} ref={ref()} />}
            </AnimatePresence>

            <Button
              ref={ref(1)}
              x="center"
              y="center"
              pad="lg"
              hover="light"
              w="fit"
              className="ml-auto gap-x-1"
              type="button"
              onClick={() => setShareActive((a) => !a)}
            >
              <Share2 className="size-4" />
              Share
            </Button>
          </div>
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

export type PollButtonProps = ButtonProps &
  Pick<PollOptionProps, "id" | "answer"> & {
    selected: string[];
    total?: number;
    setVotes: (id: string) => void;
  };

export function PollVoteButton({
  answer,
  id,
  selected,
  setVotes,
  total: _t,
  className,
  ...props
}: PollButtonProps) {
  return (
    <Button
      type="button"
      onClick={() => setVotes(id)}
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
        variant={selected.includes(id) ? "sky" : "light"}
        hover={selected.includes(id) ? "sky" : "ghost-light"}
      >
        <span className="grid size-2 aspect-square! rounded-full bg-secondary-900"></span>
      </Pill>
      {answer}
    </Button>
  );
}

type ShareProps = Omit<FramerAnimatePositionProps, "children"> & {
  pollId: string;
};

export function Share({ pollId, ...props }: ShareProps) {
  return (
    <FramerAnimatePosition
      {...props}
      animate="show"
      variants={{ hidden: { y: "30%" }, exit: { x: "30%", opacity: 0 } }}
      className="bg-secondary border-2 border-neutral/20 grid h-fit gap-y-4 px-4 pt-4 pb-8 absolute bottom-[calc(100%+10px)] drop-shadow-md z-100 w-full rounded-md right-0"
    >
      <PollLinkClipboard title="Vote link" pollId={pollId} slug="vote" />
      <PollLinkClipboard title="Results link" pollId={pollId} slug="poll" />
    </FramerAnimatePosition>
  );
}
