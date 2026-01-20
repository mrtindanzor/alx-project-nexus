import { JOB_EXPERIENCES } from "@/features/jobs/constants";
import { Button } from "@/shared/ui/Buttons";
import { cn } from "@/shared/utils/cn";
import { CardWrapper } from "../../client/components/CardWrapper";
import type { ExprienceCardProps } from "../../filters.types";

export function ExperienceSkeleton() {
  return (
    <CardWrapper title="Experience">
      <ul className="grid gap-y-2">
        {JOB_EXPERIENCES.map((exp) => (
          <Card key={exp} title={exp} />
        ))}
      </ul>
    </CardWrapper>
  );
}

function Card({ className, title, ...props }: ExprienceCardProps) {
  return (
    <li {...props} className={cn(className)}>
      <Button variant="none" pad="md" w="full">
        {title}
      </Button>
    </li>
  );
}
