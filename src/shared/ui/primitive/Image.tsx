import { cn } from "@/shared/utils/cn";
import { ImageIcon } from "lucide-react";
import NextImage from "next/image";
import type { ComponentProps } from "react";

type ImageProps = {
  url: string;
  title: string;
} & ComponentProps<"div">;

export function Image({
  title,
  url,
  className,
  children,
  ...props
}: ImageProps) {
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
        <NextImage
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
