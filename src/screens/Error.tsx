import { Home } from "lucide-react";
import { LayoutWithBackButton } from "@/shared/layouts/components/LayoutWithBackButton";
import { routes } from "@/shared/routes/routes";
import { Button, StyledLink } from "@/shared/ui/primitive/Buttons";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export function ErrorPage({ error: { message }, reset }: ErrorPageProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 min-h-[80vh]">
      <LayoutWithBackButton>
        <section className="max-w-lg mt-20 mx-auto grid h-fit @container gap-y-6 p-4">
          <h1 className="text-2xl">Something went wrong</h1>
          <p className="text-neutral/80">{message}</p>
          <div className="grid gap-x-4 gap-y-2 @md:grid-cols-2">
            <StyledLink
              hover="light"
              href={routes.home}
              w="full"
              x="center"
              pad="xl"
              y="center"
              className="gap-x-2"
            >
              <Home /> Back to safety
            </StyledLink>
            <Button
              hover="light"
              w="full"
              x="center"
              pad="xl"
              y="center"
              className="gap-x-2"
              onClick={() => reset()}
            >
              Retry
            </Button>
          </div>
        </section>
      </LayoutWithBackButton>
    </main>
  );
}
