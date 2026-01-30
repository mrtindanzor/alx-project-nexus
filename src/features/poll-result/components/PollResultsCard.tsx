"use client";

import { SignalIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/solid";
import { ArrowLeft } from "lucide-react";
import { Pill, StyledLink } from "@/shared/ui/primitive/Buttons";
import { renderText } from "@/shared/utils/textFormat";
import { pollRankStyles } from "../constants";
import { usePollResults } from "../poll.results.hooks";
import type { PollResultsCardProps } from "../poll-results.types";
import { PollResultsButton } from "./PollResultsButton";

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

      <footer className="grid gap-y-2 gap-x-4 w-full sm:grid-cols-[auto_1fr]">
        <div className="grid grid-cols-2 gap-x-2 *:w-full sm:*:w-fit sm:flex sm:justify-between *:gap-x-1 w-full">
          <Pill x="center" variant="ghost-sky" hover="none" y="center" pad="lg">
            <SignalIcon className="size-6 stroke-1 animate-pulse" />
            Live results
          </Pill>
          <StyledLink
            href={`/vote/${pollId}`}
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
