import Link from "next/link";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md p-4 border-b border-primary/10 justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined">diversity_3</span>
        </div>
        <h2 className="text-[#111818] text-xl font-bold leading-tight tracking-tight">
          CareConnect
        </h2>
      </Link>

      <NavBar></NavBar>
      <MobileNav />
    </header>
  );
}
