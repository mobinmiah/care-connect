"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: "home", label: "Home", filled: true },
    { href: "/caregivers", icon: "search", label: "Search" },
    { href: "/bookings", icon: "calendar_today", label: "Bookings" },
    { href: "/profile", icon: "person", label: "Profile" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-100 flex justify-around items-center md:hidden px-4 pb-4 pt-3">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-slate-400"}`}
          >
            <span
              className="material-symbols-outlined"
              style={
                item.filled && isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : {}
              }
            >
              {item.icon}
            </span>
            <p
              className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
