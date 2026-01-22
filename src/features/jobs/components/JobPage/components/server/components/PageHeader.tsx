import { ClockIcon } from "@heroicons/react/24/solid";
import type { PageHeaderProps } from "@/features/jobs";
import { Pill } from "@/shared/ui/Buttons";

export function PageHeader({ postedTime, title }: PageHeaderProps) {
  return (
    <section className="@container white-wrapper col-span-full py-6 px-6">
      <div className="grid gap-y-4">
        <h1 className="font-chakra text-primary font-bold text-3xl">{title}</h1>

        <Pill y="center" className="gap-x-1 p-0 text-primary/60">
          <ClockIcon className="size-4 text-primary/60" />
          Posted {postedTime}
        </Pill>
      </div>
    </section>
  );
}
