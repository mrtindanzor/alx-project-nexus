import { ImageIcon } from "lucide-react";
import Image from "next/image";
import type { ComponentProps } from "react";
import { cn } from "@/shared/utils/cn";

type MImageProps = {
  url: string;
  title: string;
} & ComponentProps<"div">;

export function MImage({
  title,
  url,
  className,
  children,
  ...props
}: MImageProps) {
  return (
    <figure
      {...props}
      className={cn(
        "relative w-full h-full",
        !url ? "bg-gray-100 rounded" : "",
        className,
      )}
    >
      {!url && (
        <ImageIcon className="size-full absolute object-contain left-1/2 top-1/2 -translate-1/2 opacity-5 stroke-1" />
      )}

      {url && (
        <Image
          alt={title}
          sizes="100%"
          fill
          src={url}
          className="object-contain"
        />
      )}
      {children}
      <figcaption hidden>{title}</figcaption>
    </figure>
  );
}
