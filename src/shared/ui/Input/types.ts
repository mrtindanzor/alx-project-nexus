import type { ComponentProps } from "react";
import type { ExtractVariantsTypes } from "@/shared/library/ExtractVariants";
import type { inputVariants } from "./Input";

export type InputProps = ExtractVariantsTypes<typeof inputVariants> &
  ComponentProps<"input">;

export type TextAreaProps = ExtractVariantsTypes<typeof inputVariants> &
  ComponentProps<"textarea">;
