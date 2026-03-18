"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";
import { visionPillars } from "@/data";

const AboutVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-(--gold)/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-(--primary-color)/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary-color) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <SectionHeader
          isInView={isInView}
          title="رؤيتنا ونهجنا"
          description="تسعى مؤسسة الطرفاوي إلى تطوير مهنة المحاماة داخل جمهورية مصر العربية من خلال تقديم خدمات قانونية متقدمة تعتمد على المعرفة القانونية المتخصصة والخبرة العملية."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 order-2 lg:order-1"
          >
            <p className="text-(--primary-color)/80 leading-loose text-base sm:text-lg mb-2">
              كما تهدف المؤسسة إلى الانتقال من النموذج التقليدي القائم على العمل
              الفردي إلى نموذج حديث يعتمد على الشراكات المهنية والعمل الجماعي
              بين المتخصصين في مختلف فروع القانون.
            </p>

            <p className="text-lg font-bold text-(--gold-dark) tracking-wider uppercase mb-2">
              نهجنا يقوم على
            </p>

            {visionPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl
                    border border-(--primary-color)/6 bg-white
                    hover:border-(--gold)/25 hover:shadow-[0_4px_20px_rgba(201,168,76,0.08)]
                    transition-all duration-400"
                >
                  <div
                    className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center
                    bg-linear-to-br from-(--primary-color)/6 to-(--gold)/8 border border-(--primary-color)/6
                    group-hover:from-(--gold)/15 group-hover:to-(--gold)/10 group-hover:border-(--gold)/20
                    transition-all"
                  >
                    <Icon className="w-6 h-6 text-(--gold-dark) group-hover:text-(--primary-color)/60 transition-colors" />
                  </div>
                  <p className="sm:text-lg font-semibold text-(--primary-color)/80 group-hover:text-(--primary-color) transition-colors">
                    {pillar.text}
                  </p>
                  <CheckCircle className="w-5 h-5 text-(--gold) transition-colors mr-auto shrink-0" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-2 md:-inset-3 rounded-4xl border border-(--gold)/30 -rotate-2" />
            <div className="absolute -inset-1 rounded-4xl border border-(--gold)/30 rotate-1" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(9,25,49,0.10)] w-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark) z-10" />
              <Image
                src="/logo/dr-trafawy-img.jpg"
                alt="مكتب مؤسسة الطرفاوي"
                width={460}
                height={320}
                className="w-full h-80 sm:h-176 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-(--primary-color)/50 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <p className="text-white text-xl font-bold">
                  رؤية نحو مستقبل قانوني أفضل
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection;
