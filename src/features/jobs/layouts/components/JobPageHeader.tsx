import { Logo } from "@/shared/layouts/components/server/Logo";
import { StyledLink } from "@/shared/ui/Buttons";

export function JobPageHeader() {
  return (
    <header className="@container z-2000 h-16 bg-neutral border-b border-b-muted-2 fixed inset-x-0 top-0">
      <div className="h-full w-full flex items-center justify-between max-w-6xl mx-auto px-4 @6xl:px-0 py-2">
        <Logo />

        <StyledLink
          variant="dark"
          hover="link"
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
