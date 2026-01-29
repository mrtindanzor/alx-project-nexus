import type { FormEvent } from "react";
import type { PollProps } from "@/domain/poll";
import { formatToDaysAgo, renderText } from "../utils/textFormat";

type PollCardProps = PollProps & {
  onVote: (e: FormEvent) => void;
  selected: null | number;
  onSeleted: (answer: string) => void;
};

export function PollCard({ onVote, title, createdAt }: PollCardProps) {
  const time = formatToDaysAgo(createdAt);

  return (
    <form onSubmit={onVote}>
      <h2>{title}</h2>
      <span>{renderText("", time.charAt(0).toUpperCase(), time.slice(1))}</span>
    </form>
  );
}
