"use client";
import { useMemo } from "react";
import type { Socket } from "socket.io-client";
import type {
  PollsEmitterEventsType,
  PollsEventsHandlerType,
} from "@/domain/poll";
import { useSocket } from "@/Socket";

export function usePollsSocket() {
  const socket = useSocket();

  const pollsSocket = useMemo(
    () => socket as Socket<PollsEventsHandlerType, PollsEmitterEventsType>,
    [socket],
  );
  return pollsSocket;
}
