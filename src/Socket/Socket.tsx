import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import type { Socket } from "socket.io-client";
import { createSocket } from "@/lib/socket";

export const SocketContext = createContext<Socket | null>(null);
const socket = createSocket();

export function SocketProvider({ children }: PropsWithChildren) {
  useSocketSetup(socket);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export function useSocket() {
  const ctx = useContext(SocketContext);
  if (!ctx) throw Error("Socket context not defined");

  return ctx;
}

export function useSocketSetup(socket: Socket) {
  useEffect(() => {
    if (!socket.connected) socket.connect();
  }, [socket]);

  return null;
}
