import { ArrowUp, BadgeDollarSign, Clock, MapPin } from "lucide-react";
import type { JobType } from "@/features/jobs/jobs.contract.types";
import { Pill, StyledLink } from "@/shared/ui/Buttons";
import { cn } from "@/shared/utils/cn";
import type { JobCardProps } from "../../jobcard.types";

export function JobCard({ job, className, ...props }: JobCardProps) {
  const { title, salary, location, type, skills, postedTime, description } =
    job;

  return (
    <li
      {...props}
      className={cn(
        "grid h-fit gap-x-4 py-6 px-8 rounded-xl gap-y-1 outline-2 outline-muted-2/70 bg-neutral",
        className,
      )}
    >
      <CardHeader title={title} />
      <Salary salary={salary} />
      <CardLocation type={type} location={location} />
      <Description description={description} />
      <Skills skills={skills} />
      <PostedTime postedTime={postedTime} />
      <Apply title={title} />
    </li>
  );
}

function CardHeader({ title }: Pick<JobType, "title">) {
  return (
    <h3 className="font-chakra text-[clamp(1.3rem,calc(0.1rem+3vw),1.8rem)] text-primary font-semibold">
      {title}
    </h3>
  );
}

function CardLocation({ location, type }: Pick<JobType, "location" | "type">) {
  return (
    <p className=" flex items-center gap-x-1 text-primary/80">
      <MapPin className="size-4" /> {location}
      {location !== type && `, ${type}`}
    </p>
  );
}

function Salary({ salary }: Pick<JobType, "salary">) {
  return (
    <p className="flex gap-x-4  items-center text-primary/90">
      <BadgeDollarSign className="size-4" /> {salary}
    </p>
  );
}

function PostedTime({ postedTime }: Pick<JobType, "postedTime">) {
  return (
    <p className="flex gap-x-1 mt-2  items-center text-primary/60">
      <Clock className="size-4" /> {postedTime}
    </p>
  );
}

function Description({ description }: Pick<JobType, "description">) {
  return (
    <p className="line-clamp-3 tracking-tight mt-2 text-primary/80">
      {description}
    </p>
  );
}

function Skills({ skills }: Pick<JobType, "skills">) {
  return (
    <ul className="grid grid-flow-col py-1 w-fit max-w-full auto-cols-auto overflow-x-auto gap-2">
      {skills.map((skill) => (
        <li key={skill}>
          <Pill variant="ghost-sky" className="z-0" hover="none" rad="xl">
            {skill}
          </Pill>
        </li>
      ))}
    </ul>
  );
}

function Apply({ title }: Pick<JobType, "title">) {
  return (
    <div>
      <StyledLink
        href={`/job/${encodeURIComponent(title)}`}
        rad="xl"
        y="center"
        variant="link"
        hover="sky"
        pad="md"
        className="text-accent ml-auto gap-x-2 tracking-wide"
      >
        View <ArrowUp className="rotate-45 size-4" />
      </StyledLink>
    </div>
  );
}
