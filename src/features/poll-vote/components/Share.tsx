"use client";

import {
  FramerAnimatePosition,
  type FramerAnimatePositionProps,
} from "@/shared/features/Framer";
import { PollLinkClipboard } from "@/shared/features/PollLinkClipboard";

type ShareProps = Omit<FramerAnimatePositionProps, "children"> & {
  pollId: string;
};

export function Share({ pollId, ...props }: ShareProps) {
  return (
    <FramerAnimatePosition
      {...props}
      animate="show"
      variants={{ hidden: { y: "30%" }, exit: { x: "30%", opacity: 0 } }}
      className="bg-secondary border-2 border-neutral/20 grid h-fit gap-y-4 px-4 pt-4 pb-8 absolute bottom-[calc(100%+10px)] drop-shadow-md z-10 w-full rounded-md right-0"
    >
      <PollLinkClipboard title="Vote link" pollId={pollId} slug="vote" />
      <PollLinkClipboard title="Results link" pollId={pollId} slug="poll" />
    </FramerAnimatePosition>
  );
}
