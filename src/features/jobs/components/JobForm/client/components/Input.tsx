"use client";

import { useId } from "react";
import { Input, Textarea } from "@/shared/ui/Input";
import { cn } from "@/shared/utils/cn";
import type { JobInputProps, PostJobPaths } from "../../jobform.types";
import { useJobFormCtx } from "../hooks/useJobForm";

export function JobInput<T extends PostJobPaths>({
  name,
  label,
  className,
  ...props
}: JobInputProps<T>) {
  const { register, registerSkill } = useJobFormCtx();
  const action = name === "skills" ? registerSkill : register;

  const id = useId();

  return (
    <div className={cn("grid h-fit gap-y-2 *:last:rounded-mds", className)}>
      <span id={id} className="font-bold">
        {label}
      </span>
      <Input aria-labelledby={id} {...props} {...action(name)} />
    </div>
  );
}

export function JobTextArea<T extends PostJobPaths>({
  name,
  label,
  className,
  ...props
}: JobInputProps<T, "textarea">) {
  const { register } = useJobFormCtx();
  const id = useId();

  return (
    <div className={cn("grid h-fit gap-y-2 *:last:rounded-md", className)}>
      <span id={id} className="font-bold">
        {label}
      </span>
      <Textarea aria-labelledby={id} {...props} {...register(name)} />
    </div>
  );
}
