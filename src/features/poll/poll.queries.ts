import { queryOptions } from "@tanstack/react-query";
import { pollService } from "./poll.service";

export const POLL_KEY = ["poll"];

export const pollQuery = (id: string) =>
  queryOptions({
    queryKey: [...POLL_KEY, id],
    queryFn: () => pollService.findById(id),
  });
