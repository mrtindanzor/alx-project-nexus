import { BanknotesIcon } from "@heroicons/react/24/outline";
import { Briefcase, Globe2Icon, Info, TrendingUp } from "lucide-react";
import type { JobFactCardProps, JobFactsProps } from "@/features/jobs";
import { StyledLink } from "@/shared/ui/Buttons";

export function JobFacts({
  salary,
  location,
  type,
  experience,
}: JobFactsProps) {
  return (
    <section className="white-wrapper grid gap-y-8 h-fit py-6 px-6 col-start-1 row-start-2 md:col-start-2">
      <h2 className="text-xl font-bold flex items-center gap-x-1">
        <Info className="size-7 fill-accent text-neutral" /> Job Quick Facts
      </h2>

      <div className="grid gap-y-6">
        <Card title="SALARY RANGE" content={salary} icon={BanknotesIcon} />
        <Card title="LOCATION" content={location} icon={Globe2Icon} />
        <Card title="JOB TYPE" content={type} icon={Briefcase} />
        <Card title="EXPERIENCE" content={experience} icon={TrendingUp} />
      </div>

      <StyledLink
        href="/"
        x="center"
        w="full"
        variant="sky"
        hover="dark"
        rad="xl"
        pad="xl"
      >
        Apply for this position
      </StyledLink>
    </section>
  );
}

function Card({ title, content, icon: Icon }: JobFactCardProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] h-fit gap-y-0.5 gap-x-4">
      <div className="aspect-square size-12 flex-place-center rounded-xl bg-muted col-start-1 row-start-1 row-span-2">
        <Icon className="size-6" />
      </div>
      <span className="text-primary/40 font-semibold col-start-2 text-sm">
        {title}
      </span>
      <p className="text-primary/70 col-start-2 font-semibold">{content}</p>
    </div>
  );
}
