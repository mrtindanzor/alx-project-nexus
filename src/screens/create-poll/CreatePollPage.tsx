import { LayoutWithBackButton } from "@/shared/layouts/components/LayoutWithBackButton";
import { CreatePollHeader } from "./sections/Header";
import { HowToCreatePoll } from "./sections/HowToCreatePoll";
import { PollForm } from "./sections/PollForm";

export function CreatePollPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 bg-muted">
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
