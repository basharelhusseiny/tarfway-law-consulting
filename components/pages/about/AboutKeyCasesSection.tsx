"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Scale, Globe, Award } from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";

const cases = [
  {
    icon: Scale,
    title: "نزاع الحراسة القضائية",
    body: "نزاع حول فرض الحراسة القضائية على شركة يقدر رأسمالها بحوالي 100 مليون جنيه، حيث تم الحصول على حكم برفض الدعوى لعدم توافر مبررات فرض الحراسة.",
  },
  {
    icon: Globe,
    title: "نزاع استثماري بالكويت",
    body: "نزاع استثماري بدولة الكويت بين مستثمرين وشركة استثمارية، حيث تم إثبات صحة الإجراءات الاستثمارية والحصول على حكم برفض جميع الدعاوى المقامة ضد موكل المؤسسة.",
  },
];

const AboutKeyCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-(--primary-color) overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-(--gold)/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.15) 1px, transparent 1px)",
            backgroundSize: "100% 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="[&_h2]:text-white [&_p]:text-white/60">
          <SectionHeader
            isInView={isInView}
            title="أبرز القضايا والإنجازات"
            description="شاركت المؤسسة في العديد من القضايا الهامة التي حققت نتائج متميزة لصالح عملائها، وتعكس هذه القضايا مدى الخبرة القانونية والقدرة على التعامل مع النزاعات المعقدة."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.2,
                  ease: "easeOut",
                }}
                className="group relative h-full flex flex-col rounded-3xl p-7
                    bg-white/4 border border-white/8
                    hover:bg-white/[0.07] hover:border-(--gold)/20
                    transition-all duration-500"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark) rounded-t-3xl" />

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-(--gold)/15 border border-(--gold)/25 group-hover:bg-(--gold)/25 transition-all mb-5">
                  <Icon className="w-7 h-7 text-(--gold-light)" />
                </div>

                <h3 className="text-xl font-black text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-white/65 leading-relaxed text-base grow">
                  {c.body}
                </p>

                <div className="flex items-center gap-2 mt-5">
                  <Award className="w-4 h-4 text-(--gold)" />
                  <span className="text-sm font-bold text-(--gold)">
                    حكم لصالح الموكل
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutKeyCasesSection;
