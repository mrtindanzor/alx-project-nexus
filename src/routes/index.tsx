import { createFileRoute } from "@tanstack/react-router";
import { generateMetaData } from "@/lib/tanstack";
import { Home } from "@/screens/home";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: generateMetaData({
      title: `Consensus - Your number 1 poll maker`,
      description: `Your number 1 poll maker`,
      path: "",
    }),
  }),
});
