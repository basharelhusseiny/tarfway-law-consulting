"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, MessageCircle } from "lucide-react";

const ContactHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative bg-(--primary-color) py-12 lg:py-14 overflow-hidden"
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Big center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-(--gold)/15 rounded-full blur-[120px]" />
        {/* Corner leaks */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-(--gold)/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-(--gold)/10 rounded-full blur-3xl" />
        {/* Subtle horizontal lines */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.2) 1px, transparent 1px)",
            backgroundSize: "100% 80px",
          }}
        />
        {/* Rotating ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-(--gold)/8 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-(--gold)/5 pointer-events-none" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <MessageCircle className="w-4 h-4 text-(--gold)" />
            <span className="text-sm font-semibold text-white/70">
              تواصل معنا
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[58px] font-black leading-tight text-white"
          >
            نحن هنا{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-(--gold) to-(--gold-light) bg-clip-text text-transparent">
                لمساعدتك
              </span>
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-linear-to-r from-(--gold) to-transparent rounded-full" />
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-20 h-px bg-linear-to-r from-(--gold) to-transparent" />
            <Scale className="w-5 h-5 text-(--gold)" />
            <div className="w-20 h-px bg-linear-to-l from-(--gold) to-transparent" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-xl text-white/70 leading-loose max-w-2xl"
          >
            فريق مؤسسة الطرفاوي للمحاماة والاستشارات القانونية مستعد للرد على
            استفساراتك وتقديم أفضل الحلول القانونية لك. أرسل لنا رسالتك وسنتواصل
            معك في أقرب وقت.
          </motion.p>
        </div>
      </div>

      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-transparent to-white/5 pointer-events-none" />
    </section>
  );
};

export default ContactHeroSection;
