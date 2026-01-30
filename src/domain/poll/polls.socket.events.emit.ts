export type PollsEmitterEventsType = {
  vote: EmitVoteEvent;
};

type EmitVoteEvent = (
  data: { pollId: string; optionId: string },
  cb: (payload: { error: boolean; message: string }) => void,
) => void;
