import { ChartPie } from "lucide-react";
import { FramerAnimatePosition } from "@/shared/features/Framer";
import {
  StyledLink,
  type StyledLinkProps,
} from "@/shared/ui/primitive/Buttons";
import { cn } from "@/shared/utils/cn";

export function WelcomeBanner() {
  return (
    <section className="section max-w-lg flex flex-col justify-center gap-y-8 rounded-xl py-10 h-lvh">
      <FramerAnimatePosition
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { y: -20 },
          show: { transition: { duration: 0.8 } },
        }}
      >
        <h1
          className={cn(
            "font-bold text-5xl sm:text-6xl md:text-7xl text-center",
            "bg-linear-to-b from-accent via-muted-stone to-neutral",
            "bg-clip-text text-transparent",
          )}
        >
          Create a Poll in seconds
        </h1>
      </FramerAnimatePosition>

      <FramerAnimatePosition
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { y: 15 },
          show: { transition: { duration: 1 } },
        }}
      >
        <p className="text-center text-neutral/80">
          Spin up a poll in moments—ask a question, add options, and share a
          link instantly. Collect real-time votes, see clear results, and keep
          the conversation moving with zero setup or hassle.
        </p>
      </FramerAnimatePosition>

      <div className="grid mx-auto gap-y-2">
        <BannerButtons
          variant="sky"
          hover="light"
          href="/new-poll"
          direction="-30%"
        >
          <ChartPie />
          Create a Poll
        </BannerButtons>
      </div>
    </section>
  );
}

function BannerButtons({
  direction,
  className,
  ...props
}: StyledLinkProps & { direction: string }) {
  return (
    <FramerAnimatePosition
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { y: direction },
        show: { transition: { duration: 1.4 } },
      }}
    >
      <StyledLink
        pad="xl"
        rad="3xl"
        x="center"
        y="center"
        className={cn("gap-x-2 mx-auto", className)}
        {...props}
      />
    </FramerAnimatePosition>
  );
}
