import { LayoutWithBackButton } from "@/shared/layouts/components/server/LayoutWithBackButton";
import { CreatePollHeader } from "../components/Header";
import { HowToCreatePoll } from "../components/HowToCreatePoll";
import { PollForm } from "../components/PollForm";

export function CreatePollPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 bg-secondary">
      <CreatePollHeader />
      <LayoutWithBackButton>
        <h1 className="text-4xl sm:text-5xl text-center font-bold">
          Create a Poll
        </h1>
        <p className="text-center py-2 text-neutral/70 mb-8">
          Complete the below fields to create your poll.
        </p>
        <PollForm />
        <HowToCreatePoll />
      </LayoutWithBackButton>
    </main>
  );
}
