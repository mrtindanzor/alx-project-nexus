import { Logo } from "@/shared/layouts/components/server/Logo";
import { StyledLink } from "@/shared/ui/primitive/Buttons";

export function JobFilterHeader() {
  return (
    <header className="@container z-2000 h-16 border-b border-b-muted-2 bg-neutral /20 fixed inset-x-0 top-0">
      <div className="h-full w-full flex items-center justify-between max-w-6xl mx-auto px-4 @6xl:px-0 py-2">
        <Logo />

        <StyledLink
          variant="sky"
          hover="ghost-sky"
          rad="xl"
          pad="lg"
          href="/post-job"
        >
          Post a Job
        </StyledLink>
      </div>
    </header>
  );
}
