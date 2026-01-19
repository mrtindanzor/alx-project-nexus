import { Logo } from "@/shared/layouts/Logo";

export function Header() {
  return (
    <header className="@container h-16 bg-muted border-b border-b-neutral/20 fixed inset-x-0 top-0">
      <div className="h-full w-full max-w-6xl mx-auto px-4 @6xl:px-0 py-2">
        <Logo />
      </div>
    </header>
  );
}
