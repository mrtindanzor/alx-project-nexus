import { LayoutWithBackButton } from "@/shared/layouts/components/LayoutWithBackButton";
import { StyledLink } from "@/shared/ui/primitive/Buttons";
import { Home } from "lucide-react";

export function PollNotFound() {
  return (
    <main className="max-w-6xl p-4 py-10 mx-auto min-h-[80vh]">
      <LayoutWithBackButton>
        <section className="max-w-lg mx-auto grid gap-y-4">
          <h1 className="mb-4 text-2xl">Poll Not found</h1>
          <p className="text-neutral/80">
            The poll you are looking for, could not found.
          </p>
          <StyledLink
            hover="light"
            href="/"
            w="full"
            x="center"
            pad="xl"
            y="center"
            className="gap-x-2"
          >
            <Home /> Back to safety
          </StyledLink>
        </section>
      </LayoutWithBackButton>
    </main>
  );
}
