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
    <section
      {...props}
      className={cn(
        "@container grid h-fit gap-y-4 border-b border-b-muted-2 pb-4",
        className,
      )}
    >
      <div className="pb-4 border-b border-b-muted-2 col-span-full">
        <h2 className="text-[clamp(1.2rem,calc(0.1rem+4vw),2rem)] font-bold">
          {title}
        </h2>
        <p className="text-primary/60 mt-1">{description}</p>
      </div>
      {children}
    </section>
  );
}
