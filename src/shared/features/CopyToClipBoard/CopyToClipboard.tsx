"use client";

import { CheckSquare, Copy } from "lucide-react";
import { Button } from "@/shared/ui/primitive/Buttons";
import { cn } from "@/shared/utils/cn";
import type { CopyToClipBoardProps } from "./copy.types";
import { useCopy } from "./useCopy";

export function CopyToClipboard({
  text,
  className,
  ...props
}: CopyToClipBoardProps) {
  const { copied, doCopy } = useCopy();

  return (
    <Button
      disabled={copied}
      variant="none"
      hover="none"
      onClick={() => doCopy(text)}
      className={cn("aspect-square", className)}
      {...props}
      title={copied ? "Copied" : "Copy to clipboard"}
    >
      {!copied && <Copy className="size-5" />}
      {copied && <CheckSquare className="size-5" />}
    </Button>
  );
}
