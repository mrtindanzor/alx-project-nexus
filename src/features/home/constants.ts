import {
  BoltIcon,
  FaceSmileIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import { Clock, Link, Shield } from "lucide-react";
import type { FetureProps } from "./home.types";

export const FEATURES: FetureProps[] = [
  {
    icon: Clock,
    title: "Deadlines",
    description:
      "Set a deadline or keep polls open forever. You're in control—run quick time-boxed polls or long-living votes that evolve over time.",
  },
  {
    icon: FaceSmileIcon,
    title: "Emoji Support",
    description:
      "Make polls more expressive and engaging. Add emojis to options to boost clarity, emotion, and participation at a glance.",
  },
  {
    icon: SignalIcon,
    title: "Live Results",
    description:
      "Watch votes update in real time. No refresh needed—see trends form instantly as responses come in.",
  },
  {
    icon: Link,
    title: "Share Anywhere",
    description:
      "One link, endless reach. Share polls across social media, chats, or embed them directly into your site.",
  },
  {
    icon: BoltIcon,
    title: "Instant Creation",
    description:
      "Create and publish a poll in seconds. No setup, no learning curve—just ask and collect answers.",
  },
  {
    icon: Shield,
    title: "Built for Trust",
    description:
      "Fast, reliable, and spam-aware by design. Polls stay accessible, fair, and easy for everyone to participate.",
  },
];
