import { APP_NAME } from "@/shared/contants/app";
import { AnimateScroll } from "@/shared/features/Framer";
import { Pill } from "@/shared/ui/primitive/Buttons";
import { CREATE_POLL_STEPS } from "../contants";
import type { CreatePollStepProps } from "../new-poll.types";

export function HowToCreatePoll() {
  return (
    <section className="bg-muted-stone/30 min-h-[60vh] pt-8 pb-20 mt-10 rounded-t-xl overflow-hidden">
      <article className="section max-w-xl grid gap-y-4 h-fit">
        <h2 className="text-accent text-center uppercase text-xl">
          Getting Started
        </h2>
        <h3 className="text-4xl text-center font-bold">
          How to use {APP_NAME} in simple steps
        </h3>

        <p className="text-center text-neutral/60">
          We&apos;ve designed our free poll maker to be easy and intuitive for
          everyone. From creating your poll and adding answer options to sharing
          it with participants, every step is straightforward and quick. Once
          your poll is live, you can watch results update in real time, helping
          you gather feedback and make decisions without complexity or technical
          barriers.
        </p>

        <ul className="grid gap-y-8 mt-8">
          {CREATE_POLL_STEPS.map((step, index) => (
            <PollStep key={step.title} {...step} index={index + 1} />
          ))}
        </ul>
      </article>
    </section>
  );
}

function PollStep({
  description,
  title,
  index,
}: CreatePollStepProps & { index: number }) {
  const even = index % 2 === 0;

  return (
    <AnimateScroll
      {...{
        styleKey: "x",
        offset: ["start end", "end end"],
        inputRange: [0, 1],
        outputRange: [even ? 200 : -200, 0],
        axis: "y",
        spring: {
          damping: 20,
          stiffness: 200,
        },
      }}
    >
      <li className="grid grid-cols-[auto_1fr] *:first:col-start-1 *:not-first:col-start-2 gap-x-2 gap-y-2  outline-muted-stone px-4 py-4 rounded-md">
        <Pill variant="ghost-sky" rad="4xl" className="font-bold">
          {index}
        </Pill>
        <h4 className="font-bold text-lg text-accent">{title}</h4>
        <p className="text-neutral/60">{description}</p>
      </li>
    </AnimateScroll>
  );
}
