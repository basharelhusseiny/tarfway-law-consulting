"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpLeft,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const NAV_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل معنا", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/TarfawyLawConsulting",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/mohamed_tarfawy_",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-tarfawy-525972332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-(--primary-color) overflow-hidden z-10 border-t border-white/5">
      {/* ── Background Decorations ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Massive top-center glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-(--gold)/8 blur-[120px]" />
        {/* Soft gold side leaks */}
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-(--gold)/3 rounded-full blur-[80px]" />
        <div className="absolute top-2/3 -left-32 w-[300px] h-[300px] bg-(--gold)/2 rounded-full blur-[60px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 pt-10 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ── Brand Column ── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link href="/" className="inline-block w-fit group">
              <div className="relative">
                <Image
                  src="/logo/main-logo.png"
                  alt="مؤسسة الطرفاوي"
                  width={150}
                  height={70}
                  className="h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{
                    filter:
                      "brightness(1.1) drop-shadow(0 0 20px rgba(201,168,76,0.25))",
                  }}
                />
              </div>
            </Link>

            <p className="text-white/60 leading-relaxed text-base sm:text-lg max-w-md font-medium">
              مؤسسة الطرفاوي للمحاماة والاستشارات القانونية — نسعى إلى تقديم
              خدمات قانونية احترافية تعتمد على الخبرة المتخصصة والعمل المؤسسي
              المنظم، مع الالتزام بأعلى معايير الشفافية والمصداقية.
            </p>

            {/* Social section */}
            <div className="flex flex-col gap-4">
              <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase">
                تابعونا عبر منصاتنا
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="group relative flex items-center justify-center w-11 h-11 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="absolute inset-0 bg-linear-to-br from-(--gold)/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon
                      size={20}
                      className="relative z-10 text-white/40 group-hover:text-(--gold) transition-colors"
                      strokeWidth={1.8}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Quick Links Column ── */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-0.5 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
              <h4 className="text-(--gold) font-black text-xl tracking-wide">
                روابط هامة
              </h4>
            </div>

            <ul className="grid gap-2">
              {NAV_LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between py-3 px-1 border-b border-white/5 text-white/50 hover:text-white transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-[-6px] transition-transform duration-300 text-base font-medium">
                      {link.label}
                    </span>
                    <ArrowUpLeft
                      size={14}
                      className="opacity-0 group-hover:opacity-100 text-(--gold) transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ── */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-0.5 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
              <h4 className="text-(--gold) font-black text-xl tracking-wide">
                بيانات التواصل
              </h4>
            </div>

            <ul className="flex flex-col gap-6">
              {/* Address */}
              <li className="group flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-(--gold)/30 transition-all duration-300">
                  <MapPin
                    size={20}
                    className="text-(--gold)"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider mb-0.5">
                    العنوان
                  </span>
                  <p className="text-white/60 group-hover:text-white transition-colors text-base leading-relaxed">
                    الطالبية - فيصل - الجيزة
                  </p>
                </div>
              </li>

              {/* Phone Numbers */}
              <li className="group flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-(--gold) group-hover:border-(--gold) transition-all duration-500">
                  <Phone
                    size={20}
                    className="text-(--gold) group-hover:text-(--primary-color) transition-colors"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="flex flex-col pt-1 gap-2">
                  <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider mb-0.5">
                    الهاتف
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="tel:+96565199404"
                      className="text-white/60 hover:text-white transition-colors text-base font-semibold border-t border-white/5 pt-1.5 inline-flex items-center gap-2"
                      dir="ltr"
                    >
                      +965 6519 9404
                      <span className="text-[10px] bg-(--gold)/10 text-(--gold) px-1.5 py-0.5 rounded uppercase font-bold">
                        الكويت
                      </span>
                    </a>
                    <a
                      href="tel:+201550601700"
                      className="text-white/60 hover:text-white transition-colors text-base font-semibold border-t border-white/5 pt-1.5 inline-flex items-center gap-2"
                      dir="ltr"
                    >
                      +20 155 060 1700
                      <span className="text-[10px] bg-(--gold)/10 text-(--gold) px-1.5 py-0.5 rounded uppercase font-bold">
                        مصر
                      </span>
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="group flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-(--gold) group-hover:border-(--gold) transition-all duration-500">
                  <Mail
                    size={20}
                    className="text-(--gold) group-hover:text-(--primary-color) transition-colors"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider mb-0.5">
                    البريد الإلكتروني
                  </span>
                  <a
                    href="mailto:tarfawymohamed614@gmail.com"
                    className="text-white/60 hover:text-white transition-colors text-base"
                  >
                    tarfawymohamed614@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-8 pt-6 border-t border-white/10 relative">
          {/* Decorative shine line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-(--gold)/20 to-transparent" />

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-white/40 text-center font-semibold">
                © {year} مؤسسة الطرفاوي للمحاماة والاستشارات القانونية. جميع
                الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
