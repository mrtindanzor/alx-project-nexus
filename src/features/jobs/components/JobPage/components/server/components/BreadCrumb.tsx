import type { JobBreadCrumbsProps } from "@/features/jobs";
import { Button, StyledLink } from "@/shared/ui/primitive/Buttons";

export function JobPageBreadCrumb({ title }: JobBreadCrumbsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 *:p-0 *:border-none *:font-bold *:not-last:text-primary/60">
      <StyledLink variant="none" hover="link" href="/">
        Home
      </StyledLink>
      /
      <StyledLink variant="none" hover="link" href="/">
        Jobs
      </StyledLink>
      /
      <Button hover="none" className="pointer-events-none">
        {title}
      </Button>
    </div>
  );
}
