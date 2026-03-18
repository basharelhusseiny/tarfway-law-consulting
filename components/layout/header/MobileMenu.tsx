"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

const navMap: Record<string, string> = {
  home: "الرئيسية",
  blog: "المقالات",
  about: "من نحن",
  contact: "اتصل بنا",
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (pathname === "" && href === "/");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-49 top-[78px] bg-black/40 backdrop-blur-sm"
            onClick={() => onClose(false)}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[78px] right-0 z-50 h-[calc(100dvh-78px)] w-[280px] flex flex-col
              bg-white border-l border-gray-100 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--gold) to-transparent" />

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 p-5 mt-2">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => onClose(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                        active
                          ? "bg-(--primary-color)/5 text-(--primary-color) border border-(--primary-color)/10"
                          : "text-(--primary-color)/70 hover:text-(--primary-color) hover:bg-(--primary-color)/5"
                      }`}
                    >
                      {/* Active indicator dot */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                          active ? "bg-(--gold)" : "bg-gray-200"
                        }`}
                      />
                      {navMap[link.key]}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA Button in Mobile Menu */}
            <div className="mt-auto p-5">
              <Link
                href="https://wa.me/96565199404"
                target="_blank"
                onClick={() => onClose(false)}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl 
                  bg-linear-to-r from-(--gold) to-(--gold-dark) text-white font-bold text-lg 
                  shadow-[0_10px_30px_rgba(201,168,76,0.3)] active:scale-95 transition-all duration-300
                  relative overflow-hidden group/mbtn"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/mbtn:animate-shimmer" />
                <Phone className="w-5 h-5 fill-current" />
                <span className="relative z-10">تواصل معنا الآن</span>
              </Link>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-(--gold) to-(--gold-dark) opacity-20" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
