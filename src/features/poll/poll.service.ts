import { createService, type FetchDataType } from "@/lib/fetchData";
import { apiRoutes } from "@/shared/routes/apiRoutes";
import type { CreatePollDTO, PollType } from "./polls.contract.types";

class PollService {
  constructor(private apiClient: FetchDataType) {}

  async create(props: CreatePollDTO) {
    const { method, path } = apiRoutes.polls.createOne;
    const client = this.apiClient<{ id: string }>({
      uri: path,
      method,
      payload: props,
    });
    await client.fetch();
    return {
      ...client.fetchStatus,
      id: client.data.id,
    };
  }

  async findById(pollId: string) {
    const { method, path } = apiRoutes.polls.findById(pollId);
    const client = this.apiClient<{ poll: PollType }>({ uri: path, method });
    await client.fetch();

    const poll = client.data.poll;

    poll.options = poll.options.map((option) => ({
      ...option,
      id: option._id as string,
    }));

    return poll;
  }
}

export const pollService = createService(
  ({ apiClient }) => new PollService(apiClient),
);
