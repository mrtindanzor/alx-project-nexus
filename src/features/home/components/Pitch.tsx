import { AnimateScroll } from "@/shared/features/Framer";
import { MImage } from "@/shared/ui/primitive/MImage";

export function Pitch() {
  return (
    <section className="section max-w-xl min-h-screen space-y-2">
      <h2 className="text-5xl text-center text-accent font-bold">
        Trusted by users worldwide.
      </h2>
      <p className="text-center mb-6 italic">
        ~ Built for speed, clarity and trust.
      </p>
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
      >
        <p className="text-center text-neutral/80">
          Use our poll maker to turn questions into instant insights. Create
          polls in seconds, share them anywhere, and watch results update in
          real time. Whether you&apos;re validating an idea, gathering opinions,
          or driving engagement, our tools are designed to remove friction and
          keep participation high.
        </p>
      </AnimateScroll>

      <AnimateScroll
        {...{
          styleKey: "scale",
          offset: ["start end", "end end"],
          inputRange: [0, 1],
          outputRange: [0.7, 1],
          spring: {
            damping: 20,
          },
        }}
      >
        <MImage
          url="/poll-create.png"
          title="Poll"
          className="border-4 pointer-events-none select-none rounded-xl z-1 bg-muted border-muted-stone my-10 h-120 "
        />
      </AnimateScroll>
    </section>
  );
}
