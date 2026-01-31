"use client";

import { useNavigate } from "../hooks/useNavigate";
import { renderText } from "../utils/textFormat";
import { CopyToClipboard } from "./CopyToClipBoard";

type PollLinkClipboardProps = {
  pollId: string;
  slug: "vote" | "poll";
  title: string;
};

export function PollLinkClipboard({
  pollId,
  slug,
  title,
}: PollLinkClipboardProps) {
  const { origin } = useNavigate();
  const link = renderText("/", origin, slug, pollId);

  return (
    <div className="grid gap-y-2">
      <span className="text-accent">{title}</span>

      <div className="rounded-lg overflow-hidden  bg-secondary-900  text-sm grid grid-cols-[1fr_auto] gap-x-2 max-w-full w-full text-neutral/70">
        <p className="flex h-full px-4 py-1.5 items-center overflow-x-auto line-clamp-1">
          {link}
        </p>

        <CopyToClipboard
          text={link}
          className=""
          variant="ghost-light"
          hover="light"
          rad="xs"
          x="center"
          pad="xs"
          y="center"
        />
      </div>
    </div>
  );
}
