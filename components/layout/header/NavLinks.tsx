"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navMap: Record<string, string> = {
  home: "الرئيسية",
  blog: "المدونة",
  about: "من نحن",
  contact: "اتصل بنا",
};

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (pathname === "" && href === "/");

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-4 py-2 rounded-xl text-lg font-bold transition-all duration-300 group ${
              active
                ? "text-(--primary-color)"
                : "text-(--primary-color)/70 hover:text-(--primary-color)"
            }`}
          >
            <span className="relative z-10">{navMap[link.key]}</span>

            {/* Hover Background */}
            <span className="absolute inset-0 rounded-lg bg-(--primary-color)/5 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

            {/* Animated underline */}
            <span
              className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-linear-to-r from-(--gold) to-(--gold-dark)
                transition-all duration-300 origin-center
                ${active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
