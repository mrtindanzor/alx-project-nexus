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
    return client.dataWithStatus;
  }

  async findById(pollId: string) {
    const { method, path } = apiRoutes.polls.findById(pollId);
    const client = this.apiClient<{ poll: PollType }>({ uri: path, method });
    await client.fetch();

    return client.data;
  }
}

export const pollService = createService(
  ({ apiClient }) => new PollService(apiClient),
);
