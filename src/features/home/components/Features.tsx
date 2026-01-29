import { AnimateScroll } from "@/shared/features/Framer";
import { Pill } from "@/shared/ui/primitive/Buttons";
import { FEATURES } from "../constants";
import type { FetureProps } from "../home.types";

export function Features() {
  return (
    <section className="section @container py-20">
      <ul className="gap-y-12 flex flex-wrap justify-center gap-x-4 ">
        {FEATURES.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </ul>
    </section>
  );
}

function Feature({ icon: Icon, title, description }: FetureProps) {
  return (
    <AnimateScroll
      {...{
        styleKey: "y",
        offset: ["start end", "start center"],
        inputRange: [0, 1],
        outputRange: [100, 0],
        spring: {
          damping: 18,
          stiffness: 100,
        },
      }}
      className="px-6 border-2 border-muted-stone opacity-90 rounded-xl max-w-100 pb-8"
    >
      <li className="">
        <span className="flex-place-center bg-accent/80 w-fit aspect-square p-2 rounded-xl mx-auto -translate-y-1/2"></span>
        <Pill
          variant="ghost-sky"
          hover="none"
          y="center"
          x="center"
          rad="2xl"
          className="aspect-square"
        >
          <Icon className="size-8" />
        </Pill>
        <span className="flex text-xl text-accent font-semibold py-1 mb-2 justify-center">
          {title}
        </span>
        <p className="text-center text-neutral/80">{description}</p>
      </li>
    </AnimateScroll>
  );
}
