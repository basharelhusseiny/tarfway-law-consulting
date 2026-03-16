"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  isInView?: boolean;
  title: string;
  description: string;
  centered?: boolean;
}

const SectionHeader = ({
  isInView = true,
  title,
  description,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black leading-snug text-(--primary-color)">
        {title}
      </h2>

      {/* Decorative underline */}
      <div
        className={`flex items-center gap-2 mt-5 mb-5 ${
          centered ? "justify-center" : ""
        }`}
      >
        <div className="w-24 h-[2px] bg-linear-to-r from-(--gold) to-transparent rounded-full" />
        <div className="w-3 h-3 rounded-full bg-(--gold) animate-pulse" />
        <div className="w-24 h-[2px] bg-linear-to-l from-(--gold) to-transparent rounded-full" />
      </div>

      {/* Description */}
      <p
        className={`text-sm sm:text-lg text-(--primary-color)/70 leading-relaxed max-w-3xl font-medium ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
