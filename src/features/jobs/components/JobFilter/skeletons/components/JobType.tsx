import { JOB_TYPES } from "@/features/jobs/constants";
import { Button } from "@/shared/ui/Buttons";
import { CardWrapper } from "../../client/components/CardWrapper";
import type { JobTypeCardProps } from "../../filters.types";

export function JobTypeSkeleton() {
  return (
    <CardWrapper title="JOB TYPE">
      <ul className="grid gap-y-2">
        {JOB_TYPES.map((job) => (
          <Card key={job} title={job} />
        ))}
      </ul>
    </CardWrapper>
  );
}

function Card({ title, ...props }: JobTypeCardProps) {
  return (
    <li {...props}>
      <Button variant="none" pad="md" w="full">
        {title}
      </Button>
    </li>
  );
}
