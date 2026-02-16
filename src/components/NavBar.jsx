import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="hidden md:flex flex-wrap justify-between items-center gap-3">
      <Link
        href="/about"
        className="bg-primary text-[#111818] px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/80 transition-colors"
      >
        About Us
      </Link>

      <Link
        href="/bookings"
        className="bg-primary text-[#111818] px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/80 transition-colors"
      >
        My Bookings
      </Link>

      <Link
        href="/services"
        className="bg-primary text-[#111818] px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/80 transition-colors"
      >
        Our Services
      </Link>

      <Link
        href="/signup"
        className="bg-primary text-[#111818] px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/80 transition-colors"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default NavBar;
