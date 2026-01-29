import { io, type Socket } from "socket.io-client";

let cachedSocket: null | Socket = null;
const nameSpace = process.env.NEXT_PUBLIC_SERVER_URI;
if (!nameSpace) throw Error("Server Uri not defined");

export function createSocket() {
  if (cachedSocket) return cachedSocket;

  if (!nameSpace) throw Error("Server Uri not defined");

  cachedSocket = io(nameSpace, { autoConnect: false, path: "/socket.io" });

  return cachedSocket;
}
