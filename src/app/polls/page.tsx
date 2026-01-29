import { QueryClient } from "@tanstack/react-query";
import { fetchPolls, POLLS_KEY_PAGINATED } from "@/domain/poll";

const qc = new QueryClient();

export default async function () {
  await qc.prefetchInfiniteQuery({
    queryKey: [...POLLS_KEY_PAGINATED],
    queryFn: () => fetchPolls({ page: 0 }),
    initialPageParam: 0,
  });

  return null;
}
