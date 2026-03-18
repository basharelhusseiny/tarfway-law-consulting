"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { contactInfo, socialLinks } from "@/data";

interface ContactInfoSidebarProps {
  isInView: boolean;
}

const ContactInfoSidebar = ({ isInView }: ContactInfoSidebarProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-7 w-1 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
          <h2 className="text-2xl font-black text-(--primary-color)">
            بيانات التواصل
          </h2>
        </div>
        <p className="text-(--primary-color)/80 text-sm font-medium leading-relaxed pr-4">
          يسعدنا تواصلك معنا عبر أي من القنوات التالية
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-3">
        {contactInfo.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              className="group flex items-center gap-4 p-4 rounded-2xl
                border border-(--primary-color)/8 bg-white
                hover:border-(--gold)/30 hover:shadow-[0_8px_30px_rgba(201,168,76,0.1)]
                hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center
                bg-linear-to-br from-(--primary-color)/6 to-(--gold)/8
                border border-(--primary-color)/15
                group-hover:from-(--gold)/20 group-hover:to-(--gold)/10
                group-hover:border-(--gold)/25 transition-all duration-300"
              >
                <Icon
                  className="w-6 h-6 text-(--gold-dark) group-hover:text-(--primary-color) transition-colors"
                  strokeWidth={1.8}
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-(--primary-color)/60 font-bold uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                <div className="flex items-center gap-2">
                  <p
                    className="text-base font-bold text-(--primary-color)/80 group-hover:text-(--primary-color) transition-colors truncate"
                    dir={item.href.startsWith("tel") ? "ltr" : "rtl"}
                  >
                    {item.value}
                  </p>
                  {item.tag && (
                    <span className="shrink-0 text-[10px] font-black bg-(--gold)/10 text-(--gold-dark) px-2 py-0.5 rounded-full border border-(--gold)/20">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>

              <ExternalLink
                className="w-4 h-4 text-(--primary-color)/20 group-hover:text-(--gold) transition-colors shrink-0"
                strokeWidth={1.8}
              />
            </motion.a>
          );
        })}
      </div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="pt-2"
      >
        <p className="text-(--primary-color)/70 font-bold uppercase tracking-[0.15em] mb-4">
          تابعونا على منصاتنا
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group relative w-12 h-12 rounded-2xl flex items-center justify-center
                border border-(--primary-color)/20 bg-white
                hover:border-(--gold)/30 hover:shadow-[0_4px_16px_rgba(201,168,76,0.15)]
                hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-br from-(--gold)/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon
                size={24}
                className="relative z-10 text-(--primary-color)/80 group-hover:text-(--gold-dark) transition-colors"
                strokeWidth={1.8}
              />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Working hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="rounded-2xl p-5 bg-(--primary-color) border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-(--gold) via-(--gold-light) to-transparent" />
        <p className="text-(--gold)/80 font-bold uppercase tracking-[0.15em] mb-3">
          ساعات العمل
        </p>
        <div className="flex flex-col gap-2">
          {[
            { day: "السبت – الخميس", hours: "9:00 ص – 5:00 م" },
            { day: "الجمعة", hours: "مغلق" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-white/60 font-medium">
                {item.day}
              </span>
              <span
                className={`text-sm font-bold ${item.hours === "مغلق" ? "text-red-400/70" : "text-(--gold)"}`}
              >
                {item.hours}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfoSidebar;
