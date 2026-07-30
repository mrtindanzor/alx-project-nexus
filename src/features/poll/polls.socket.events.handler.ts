import type { PollResults } from "./polls.contract.types";

export type PollsEventsHandlerType = {
  "live-results": EmitVoteResults;
};

type EmitVoteResults = (payload: PollResults) => void;
