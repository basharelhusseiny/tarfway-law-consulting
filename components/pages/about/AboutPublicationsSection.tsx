"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Award } from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";
import { certifications, publications } from "@/data";

const AboutPublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-(--primary-color) overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-(--gold)/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-(--gold)/6 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="[&_h2]:text-white [&_p]:text-white/60">
          <SectionHeader
            isInView={isInView}
            title="المؤلفات والمقالات"
            description="قدم الدكتور محمد طرفاوي العديد من الدراسات والأبحاث القانونية المتخصصة، فضلاً عن مقالات نشرت على الموقع الرسمي لنقابة المحامين المصرية."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Publications */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-2"
            >
              <div className="h-6 w-0.5 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
              <h3 className="text-(--gold) font-black text-xl">
                الأبحاث والدراسات
              </h3>
            </motion.div>
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group flex items-start gap-4 p-4 rounded-2xl
                    bg-white/4 border border-white/8
                    hover:border-(--gold)/20 hover:bg-white/[0.07]
                    transition-all duration-400"
              >
                <BookOpen className="w-5 h-5 text-(--gold) shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-white/70 text-base leading-relaxed group-hover:text-white/85 transition-colors">
                  {pub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-2"
            >
              <div className="h-6 w-0.5 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
              <h3 className="text-(--gold) font-black text-xl">
                الدورات والتأهيل المهني
              </h3>
            </motion.div>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group flex items-start gap-4 p-4 rounded-2xl
                    bg-white/4 border border-white/8
                    hover:border-(--gold)/20 hover:bg-white/[0.07]
                    transition-all duration-400"
              >
                <Award className="w-5 h-5 text-(--gold) shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-white/70 text-base leading-relaxed group-hover:text-white/85 transition-colors">
                  {cert}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2 p-4 rounded-2xl bg-(--gold)/8 border border-(--gold)/15"
            >
              <p className="text-white/60 text-sm leading-relaxed">
                كما نشر العديد من المقالات القانونية على الموقع الرسمي لنقابة
                المحامين المصرية تناولت موضوعات مثل حماية البيانات الشخصية
                والملكية الفكرية.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPublicationsSection;
