import { Logo } from "@/shared/layouts/components/server/Logo";

export function PollVoteHeader() {
  return (
    <header className="h-16 z-100 border-b-muted-stone border-b bg-muted fixed top-0 inset-x-0">
      <div className="w-full px-4 max-w-6xl">
        <Logo />
      </div>
    </header>
  );
}
