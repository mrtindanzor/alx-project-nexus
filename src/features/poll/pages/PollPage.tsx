import { LayoutWithBackButton } from "@/shared/layouts/components/server/LayoutWithBackButton";
import { PollForm } from "../components/PollForm";

export function PollPage() {
  return (
    <main className="py-20 px-4 sm:px-6">
      <LayoutWithBackButton>
        <h1 className="text-4xl sm:text-5xl text-center font-bold">
          Create a Poll
        </h1>
        <p className="text-center py-2 text-neutral/70">
          Complete the below fields to create your poll.
        </p>
        <PollForm />
      </LayoutWithBackButton>
    </main>
  );
}
