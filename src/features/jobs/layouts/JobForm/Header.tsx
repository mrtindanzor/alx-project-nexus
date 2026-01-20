import { Logo } from "@/shared/layouts/Logo";
import { StyledLink } from "@/shared/ui/Buttons";

export function Header() {
  return (
    <header className="@container z-2000 h-16 bg-muted border-b border-b-neutral/20 fixed inset-x-0 top-0">
      <div className="h-full w-full flex items-center justify-between max-w-6xl mx-auto px-4 @6xl:px-0 py-2">
        <Logo />

        <StyledLink variant="outline" hover="sky" rad="xl" pad="lg" href="/">
          Browse Jobs
        </StyledLink>
      </div>
    </header>
  );
}
