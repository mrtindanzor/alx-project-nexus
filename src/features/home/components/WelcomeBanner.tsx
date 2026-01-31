import { ChartPie } from "lucide-react";
import { FramerAnimatePosition } from "@/shared/features/Framer";
import {
  StyledLink,
  type StyledLinkProps,
} from "@/shared/ui/primitive/Buttons";
import { MImage } from "@/shared/ui/primitive/MImage";
import { cn } from "@/shared/utils/cn";

export function WelcomeBanner() {
  return (
    <div className="w-full grid grid-cols-[1fr_auto] @container overflow-hidden">
      <section className="section ml-auto max-w-xl w-full  py-10 min-h-lvh flex flex-col *:z-1 justify-center gap-y-8">
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
      <MImage
        url="/images/poll-results.png"
        title="Poll results sample image"
        className="pointer-events-none select-none rounded-xl *:object-cover *:object-top-left bg-muted border-muted-stone mt-5 w-10 @xs:w-15 @sm:w-20 @lg:w-30 @xl:w-40 @2xl:w-60 @4xl:w-70 @6xl:w-100 h-full "
      />
    </div>
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
