import { createFileRoute } from "@tanstack/react-router";
import { generateMetaData } from "@/lib/tanstack";
import { CreatePollPage } from "@/screens/create-poll";

export const Route = createFileRoute("/create")({
  component: CreatePollPage,
  head: () => ({
    meta: generateMetaData({
      title: "Create your a poll now",
      description: "Start to create a poll now",
      path: "create",
    }),
  }),
});
