"use client";

import Image from "next/image";
import Button from "@/components/ui/buttons/Button";
import { motion } from "framer-motion";
import { Scale, Phone, Calendar } from "lucide-react";

const stats = [
  { value: "١٩+", label: "سنة خبرة" },
  { value: "٥٠٠+", label: "قضية ناجحة" },
  { value: "٩٨٪", label: "نسبة رضا العملاء" },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-white min-h-[calc(100vh-78px)]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-(--gold) rounded-full opacity-[0.2] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-(--gold) rounded-full opacity-[0.2] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary-color) 2px, transparent 2px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:py-16">
          {/* ── Image Side — shows FIRST on mobile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center relative pt-8 lg:pt-0"
          >
            {/* Spinning gold ring — desktop only */}
            <div className="absolute inset-0 items-center justify-center pointer-events-none hidden lg:flex">
              <div className="w-[420px] h-[420px] rounded-full border-2 border-(--gold)/20 animate-spin-slow" />
            </div>
            <div className="absolute inset-0 items-center justify-center pointer-events-none hidden lg:flex">
              <div className="w-[340px] h-[340px] rounded-full border border-(--gold)/70" />
            </div>

            {/* Main image card */}
            <div className="relative z-10">
              <div className="absolute inset-4 -bottom-6 bg-(--primary-color)/10 rounded-4xl blur-2xl" />

              <div
                className="relative bg-linear-to-b from-(--gold)/20 via-white to-(--gold)/5
                  border border-(--gold)/20 rounded-4xl overflow-hidden
                  shadow-[0_20px_60px_rgba(9,25,49,0.12)]
                  w-[260px] sm:w-[310px] lg:w-[360px]"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-(--gold) to-(--gold-dark)" />

                <Image
                  src="/logo/tarffawy-img.png"
                  alt="الدكتور محمد طرفاوي"
                  width={380}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Name badge */}
                <div
                  className="absolute bottom-3 right-3 left-3 bg-white/90 backdrop-blur-md
                    rounded-xl px-3 py-2.5 border border-(--gold)/20
                    shadow-[0_4px_20px_rgba(9,25,49,0.1)]"
                >
                  <p className="font-black text-(--primary-color)">
                    د. محمد طرفاوي
                  </p>
                  <p className="text-sm text-(--gold-dark) font-semibold mt-0.5">
                    مؤسس ومدير مؤسسة الطرفاوي القانونية
                  </p>
                </div>
              </div>
            </div>

            {/* Floating logo badge — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -left-4 top-1/3 bg-white rounded-2xl p-3
                shadow-[0_8px_30px_rgba(9,25,49,0.12)] border border-(--gold)/15
                hidden lg:block"
            >
              <Image
                src="/logo/hero-img-logo.png"
                alt="شعار المؤسسة"
                width={80}
                height={80}
                className="w-30 h-30 object-contain"
              />
            </motion.div>
          </motion.div>

          {/* ── Text Side — shows SECOND on mobile ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-(--primary-color)/5 border border-(--primary-color)/10"
            >
              <Scale className="w-4 h-4 text-(--gold)" />
              <span className="text-sm font-semibold text-(--primary-color)/70">
                مؤسسة قانونية متخصصة
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black leading-snug text-(--primary-color)">
                مؤسسة الطرفاوي{" "}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-(--gold) to-(--gold-dark) bg-clip-text text-transparent">
                    للمحاماة
                  </span>
                </span>
                <br className="hidden sm:block" /> والاستشارات القانونية
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg font-semibold text-(--gold-dark) leading-relaxed"
            >
              خبرة قانونية متخصصة وحلول احترافية للشركات والأفراد في مختلف
              مجالات القانون
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-(--primary-color)/70 leading-loose max-w-xl"
            >
              تقدم مؤسسة الطرفاوي خدمات قانونية متكاملة تشمل الاستشارات
              القانونية، وتمثيل العملاء أمام مختلف جهات القضاء، وتسوية النزاعات
              بالوسائل البديلة مثل الوساطة والتحكيم والتفاوض. تأسست على يد
              الدكتور محمد طرفاوي بهدف تقديم نموذج حديث للعمل القانوني يعتمد على
              الاحترافية والتخصص والالتزام بأعلى معايير الشفافية.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <Button
                href="/contact"
                variant="primary"
                showShimmer={true}
                fullWidth={true}
                className="sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>احجز استشارة قانونية</span>
              </Button>

              <Button
                href="https://wa.me/+96565199404"
                target="_blank"
                variant="gold"
                showShimmer={true}
                fullWidth={true}
                className="sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5 fill-current shrink-0" />
                <span>تواصل معنا الآن</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="w-full grid grid-cols-3 gap-3 pt-4 border-t border-(--primary-color)/8"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center lg:items-start py-2 lg:py-0 
                    bg-(--primary-color)/2 lg:bg-transparent
                    rounded-xl lg:rounded-none
                    border border-(--primary-color)/5 lg:border-0"
                >
                  <p className="text-xl sm:text-2xl font-black text-(--primary-color)">
                    {s.value}
                  </p>
                  <p className="text-sm text-(--gold-dark)/70 font-bold mt-0.5 text-center lg:text-start">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-50/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
