"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Eye, Target, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";

const highlights = [
  {
    icon: Target,
    text: "تطوير مفهوم العمل القانوني في مصر من خلال المعرفة المتخصصة والخبرة العملية",
  },
  {
    icon: Eye,
    text: "الانتقال بمهنة المحاماة من الإطار التقليدي إلى نموذج حديث يعتمد على العمل المؤسسي",
  },
  {
    icon: Sparkles,
    text: "دعم الكفاءات القانونية الشابة وتوفير فرص حقيقية للمشاركة في تطوير العمل القانوني",
  },
];

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-(--primary-color) overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-(--gold)/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-(--gold)/10 rounded-full blur-3xl" />
        {/* Subtle line pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.15) 1px, transparent 1px)",
            backgroundSize: "100% 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Section Header — white on dark */}
        <div className="[&_h2]:text-white [&_p]:text-white/60">
          <SectionHeader
            isInView={isInView}
            title="رؤيتنا"
            description="الارتقاء بمهنة المحاماة من خلال تقديم خدمات قانونية احترافية تعتمد على العمل المؤسسي والتخصص القانوني، مع دعم الكفاءات القانونية الشابة وتطوير بيئة العمل القانوني في مصر."
          />
        </div>

        {/* Content — Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Image Side ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center order-1"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-4xl border border-(--gold)/10 -rotate-2" />
            <div className="absolute -inset-1 rounded-4xl border border-(--gold)/5 rotate-1" />

            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-full max-w-[480px]">
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark) z-10" />

              <Image
                src="/logo/dr-trafawy-img.jpg"
                alt="د. محمد طرفاوي في المكتب"
                width={480}
                height={560}
                className="w-full h-auto object-cover"
              />

              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-(--primary-color)/80 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-4 right-4 left-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-(--gold)/20 flex items-center justify-center border border-(--gold)/30">
                  <Eye className="w-5 h-5 text-(--gold-light)" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">
                    د. محمد طرفاوي
                  </p>
                  <p className="text-white/70 text-sm">
                    رؤية نحو مستقبل قانوني أفضل
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Text Side ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-6 order-2 lg:order-2 text-center lg:text-start items-center lg:items-start"
          >
            {/* Paragraphs */}
            <div className="space-y-5">
              <p className="text-white/70 leading-loose text-base sm:text-lg">
                تسعى مؤسسة الطرفاوي للمحاماة والاستشارات القانونية إلى تطوير
                مفهوم العمل القانوني في مصر من خلال تقديم خدمات قانونية احترافية
                تعتمد على المعرفة القانونية المتخصصة والخبرة العملية.
              </p>

              <p className="text-white/70 leading-loose text-base sm:text-lg">
                كما تهدف المؤسسة إلى الانتقال بمهنة المحاماة من الإطار التقليدي
                القائم على العمل الفردي إلى نموذج حديث يعتمد على العمل المؤسسي
                والشراكات المهنية بين المتخصصين في المجالات القانونية المختلفة.
              </p>

              <p className="text-white/70 leading-loose text-base sm:text-lg">
                وتعمل المؤسسة كذلك على دعم الكفاءات القانونية الشابة وتوفير فرص
                حقيقية لها للمشاركة في تطوير العمل القانوني والمساهمة في تقديم
                خدمات قانونية متميزة للعملاء.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="flex flex-col gap-3 mt-2">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl
                      bg-white/4 border border-white/[0.07]
                      hover:bg-white/[0.07] hover:border-(--gold)/15
                      transition-all duration-400"
                  >
                    <div
                      className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center
                        bg-(--gold)/10 border border-(--gold)/15
                        group-hover:bg-(--gold)/20 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-(--gold)" />
                    </div>
                    <p className="text-[15px] text-white/60 leading-relaxed group-hover:text-white/75 transition-colors duration-300 pt-1.5">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
