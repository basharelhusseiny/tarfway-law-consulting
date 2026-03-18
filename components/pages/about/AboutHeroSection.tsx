"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Scale, Calendar, Phone } from "lucide-react";
import Button from "@/components/ui/buttons/Button";

const AboutHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative bg-white min-h-[480px] flex items-center overflow-hidden py-12 lg:py-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-(--gold)/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-(--gold)/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary-color) 2px, transparent 2px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Text ── */}
          <div className="flex flex-col gap-6 text-center lg:text-start items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--primary-color)/5 border border-(--primary-color)/10"
            >
              <Scale className="w-4 h-4 text-(--gold)" />
              <span className="text-sm font-semibold text-(--primary-color)/70">
                من نحن
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-black leading-snug text-(--primary-color)"
            >
              مؤسسة الطرفاوي{" "}
              <span className="bg-linear-to-r from-(--gold) to-(--gold-dark) bg-clip-text text-transparent">
                للمحاماة
              </span>
              <br className="hidden sm:block" /> والاستشارات القانونية
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-(--primary-color)/70 leading-loose max-w-xl"
            >
              تعرف على مؤسسة الطرفاوي للمحاماة والاستشارات القانونية، خبرتنا،
              رؤيتنا، ومسيرتنا في تقديم خدمات قانونية احترافية للشركات والأفراد
              داخل مصر وخارجها.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <Button
                href="/contact"
                variant="primary"
                showShimmer
                className="justify-center"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>احجز استشارة قانونية</span>
              </Button>
              <Button
                href="https://wa.me/+96565199404"
                target="_blank"
                variant="gold"
                showShimmer
                className="justify-center"
              >
                <Phone className="w-5 h-5 fill-current shrink-0" />
                <span>تواصل معنا</span>
              </Button>
            </motion.div>
          </div>

          {/* ── Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center relative"
          >
            {/* Spinning rings — desktop only */}
            <div className="absolute inset-0 items-center justify-center pointer-events-none hidden lg:flex">
              <div className="w-[420px] h-[420px] rounded-full border-2 border-(--gold)/20 animate-spin-slow" />
            </div>
            <div className="absolute inset-0 items-center justify-center pointer-events-none hidden lg:flex">
              <div className="w-[340px] h-[340px] rounded-full border border-(--gold)/60" />
            </div>

            <div className="relative z-10">
              <div className="absolute inset-4 -bottom-6 bg-(--primary-color)/10 rounded-4xl blur-2xl" />
              <div
                className="relative bg-linear-to-b from-(--gold)/20 via-white to-(--gold)/5
                  border border-(--gold)/20 rounded-4xl overflow-hidden
                  shadow-[0_20px_60px_rgba(9,25,49,0.12)]
                  w-[260px] sm:w-[310px] lg:w-[360px]"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-(--gold) to-(--gold-dark)" />
                <Image
                  src="/logo/tarffawy-img.png"
                  alt="الدكتور محمد طرفاوي"
                  width={380}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-3 right-3 left-3 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2.5 border border-(--gold)/20 shadow-[0_4px_20px_rgba(9,25,49,0.1)]">
                  <p className="font-black text-(--primary-color)">
                    د. محمد طرفاوي محمد
                  </p>
                  <p className="text-sm text-(--gold-dark) font-semibold mt-0.5">
                    مؤسس ومدير مؤسسة الطرفاوي القانونية
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-50/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutHeroSection;
