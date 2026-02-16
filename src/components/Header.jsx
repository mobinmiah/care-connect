import Link from "next/link";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md px-4 py-3 sm:p-4 border-b border-primary/10 justify-between gap-2">
      <Link href="/" className="flex items-center gap-2 min-w-0">
        <div className="text-primary flex size-9 sm:size-10 items-center justify-center bg-primary/10 rounded-lg shrink-0">
          <span className="material-symbols-outlined text-xl sm:text-2xl">diversity_3</span>
        </div>
        <h2 className="text-[#111818] text-base sm:text-xl font-bold leading-tight tracking-tight truncate">
          CareConnect
        </h2>
      </Link>

      <NavBar></NavBar>
      <MobileNav />
    </header>
  );
}
