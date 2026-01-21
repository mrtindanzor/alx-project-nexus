import type { ComponentProps } from "react";
import type { ExtractVariantsTypes } from "@/shared/types/lib/ExtractVariants";
import type { inputVariants } from "./components/Input";

export type InputProps = ExtractVariantsTypes<typeof inputVariants> &
  ComponentProps<"input">;

export type TextAreaProps = ExtractVariantsTypes<typeof inputVariants> &
  ComponentProps<"textarea">;
