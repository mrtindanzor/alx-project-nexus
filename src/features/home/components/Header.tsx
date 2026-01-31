import { Logo } from "@/shared/layouts/components/server/Logo";
import { StyledLink } from "@/shared/ui/primitive/Buttons";

export function HomeHeader() {
  return (
    <header className="h-16 z-100 border-b-muted-stone border-b flex items-center bg-muted fixed top-0 inset-x-0">
      <div className="w-full items-center  px-4 max-w-6xl mx-auto flex justify-between">
        <Logo />

        <StyledLink
          href="/new-poll"
          pad="xl"
          variant="light"
          rad="lg"
          hover="sky"
          className="h-fit"
        >
          Create a poll
        </StyledLink>
      </div>
    </header>
  );
}
