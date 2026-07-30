import { getEnv } from "./utils/getEnv";

const serverUri = getEnv({ name: "NEXT_PUBLIC_SERVER_URI" });

export const publicUrls = {
  serverUri,
};
