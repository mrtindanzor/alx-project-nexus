import { ExtractVariantsTypes } from "@/shared/library/ExtractVariants";
import { inputVariants } from "./Input";
import { ComponentProps } from "react";

export type InputProps = ExtractVariantsTypes<typeof inputVariants> &
  ComponentProps<"input">;
