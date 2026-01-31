import type {
  InfinitePollProps,
  PollProps,
  PollResultProps,
} from "./polls.contract.types";

export const pollsStateUpdater = {
  updateInifinitePollsResults,
  updatePollResult,
};

function updateInifinitePollsResults(
  polls: InfinitePollProps,
  pollResults: PollResultProps,
): InfinitePollProps {
  return {
    ...polls,
    pages: polls.pages.map((page) => ({
      ...page,
      data: page.data.map((poll) => updatePollResult(poll, pollResults)),
    })),
  };
}

function updatePollResult(
  poll: PollProps,
  pollResults: PollResultProps,
): PollProps {
  return {
    ...poll,
    options: poll.options.map((option) => {
      if (!pollResults.options[option._id]) return option;

      return {
        ...option,
        total: pollResults.options[option._id],
      };
    }),
  };
}
