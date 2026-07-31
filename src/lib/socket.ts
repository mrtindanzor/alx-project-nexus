import { io, type Socket } from "socket.io-client";
import { publicUrls } from "@/config/publicUrls";

let cachedSocket: null | Socket = null;

export function createSocket() {
  if (cachedSocket) return cachedSocket;

  cachedSocket = io(publicUrls.serverUri, {
    autoConnect: false,
    path: "/socket.io",
  });

  return cachedSocket;
}
