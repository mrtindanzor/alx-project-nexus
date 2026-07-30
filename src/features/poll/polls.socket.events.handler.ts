import type { PollResultProps } from "./polls.contract.types";

export type PollsEventsHandlerType = {
  "live-results": EmitVoteResults;
};

type EmitVoteResults = (payload: PollResultProps) => void;
