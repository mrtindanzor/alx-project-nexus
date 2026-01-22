import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import type {
  DescriptionSectionWrapperProps,
  JobDecriptionProps,
} from "@/features/jobs";

export function JobDecription({ description, skills }: JobDecriptionProps) {
  return (
    <div className="white-wrapper px-6 py-6 grid h-fit gap-y-8">
      <SectionWrapper title="About the Role">
        <p className="text-justify">{description}</p>
      </SectionWrapper>

      <SectionWrapper title="Skills Required">
        <ul className="list-disc list-inside ">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-x-1">
              <CheckBadgeIcon className="size-4 text-accent" /> {skill}
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </div>
  );
}

function SectionWrapper({ title, children }: DescriptionSectionWrapperProps) {
  return (
    <section className="space-y-4">
      <h2 className="border-l-4 border-l-accent pl-2  font-bold text-xl">
        {title}
      </h2>

      {children}
    </section>
  );
}
