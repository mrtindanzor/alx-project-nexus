"use client";

import { SignalIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/solid";
import { ArrowLeft } from "lucide-react";
import { usePollResults } from "@/features/poll/poll.usePollResult";
import { routes } from "@/shared/routes/routes";
import {
  type ButtonProps,
  Pill,
  StyledLink,
} from "@/shared/ui/primitive/Buttons";
import { cn } from "@/shared/utils/cn";
import { renderText } from "@/shared/utils/textFormat";

export type PollResultsCardProps = {
  pollId: string;
};

export function PollResultsCard({ pollId }: PollResultsCardProps) {
  const { title, time, options, totalVotes } = usePollResults({ pollId });

  return (
    <article className="mx-auto py-4 px-4 md:max-w-3xl grid h-fit gap-y-8 rounded-md mt-5 border border-t-4 border-t-accent border-neutral/20 bg-secondary-900 drop-shadow-md">
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

      <ul className="grid gap-y-4">
        {options.map((option, index) => (
          <PollResultsButton
            totalVotes={totalVotes}
            total={option.total}
            key={option.answer}
            answer={option.answer}
            className={pollRankStyles[index]?.className}
          />
        ))}
      </ul>

      <footer className="grid gap-y-2 gap-x-4 @container w-full sm:grid-cols-[auto_1fr]">
        <div className="grid  @sm:grid-cols-2 gap-2 *:w-full sm:*:w-fit sm:flex sm:justify-between *:gap-x-1 w-full">
          <Pill x="center" variant="ghost-sky" hover="none" y="center" pad="lg">
            <SignalIcon className="size-6 stroke-1 animate-pulse" />
            Live results
          </Pill>
          <StyledLink
            href={routes.vote(pollId)}
            x="center"
            y="center"
            pad="lg"
            hover="light"
          >
            <ArrowLeft className="size-4 stroke-3" />
            Back to poll
          </StyledLink>
        </div>
      </footer>
    </article>
  );
}

export type PollButtonProps = ButtonProps & {
  total: number;
  totalVotes: number;
  answer: string;
};

export function PollResultsButton({
  totalVotes,
  total,
  answer,
  className,
  ...props
}: PollButtonProps) {
  const width = total === 0 ? 0 : ((total / totalVotes) * 100).toFixed(2);

  return (
    <div className="">
      <p className="grid grid-cols-[1fr_auto] gap-x-4 text-neutral/60">
        <span>{answer}</span>
        <span title="Total votes for this option" className="flex">
          {width}% ({total} {total === 1 ? "vote" : "votes"})
        </span>
      </p>

      <Pill
        variant="ghost-light"
        hover="none"
        rad="2xl"
        className="p-0"
        w="full"
      >
        <Pill
          hover="none"
          {...props}
          className={cn(
            "transition-all ease-in-out duration-500 px-0",
            className,
          )}
          style={{ width: `${width}%` }}
          rad="2xl"
          pad="xl"
        />
      </Pill>
    </div>
  );
}

export const pollRankStyles = [
  { className: "bg-yellow-400" },
  { className: "bg-gray-300" },
  { className: "bg-amber-500" },
  { className: "bg-blue-400" },
  { className: "bg-sky-400" },
  { className: "bg-teal-400" },
  { className: "bg-violet-400" },
  { className: "bg-slate-300" },
] as const;
