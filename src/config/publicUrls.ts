import { getEnv } from "./utils/getEnv";

const appUrl = getEnv({ name: "NEXT_PUBLIC_APP_URL" });
const serverUri = getEnv({ name: "NEXT_PUBLIC_SERVER_URI" });

export const publicUrls = {
  appUrl,
  serverUri,
};
