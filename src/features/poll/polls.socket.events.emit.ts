export type PollsEmitterEventsType = {
  vote: EmitVoteEvent;
};

type EmitVoteEvent = (
  data: { pollId: string; votesIds: string[] },
  cb: (payload: { error: boolean; message: string }) => void,
) => void;
