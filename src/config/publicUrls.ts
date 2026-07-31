import { getEnv } from "./utils/getEnv";

const serverUri = getEnv({ name: "VITE_SERVER_URI" });

export const publicUrls = {
  serverUri,
};
