import { cn } from "@/shared/utils/cn";
import type { FormSectionWrapperProps } from "../../jobform.types";

export function FormSectionWrapper({
  title,
  description,
  className,
  children,
  ...props
}: FormSectionWrapperProps) {
  return (
    <section {...props} className={cn("grid h-fit gap-y-4", className)}>
      <div className="pb-4 border-b border-b-neutral/10 col-span-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-neutral/60">{description}</p>
      </div>
      {children}
    </section>
  );
}
