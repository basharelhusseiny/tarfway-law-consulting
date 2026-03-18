"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, CheckCircle, Star } from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";
import { academicQualifications, skills } from "@/data";

const AboutFounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-(--primary-color) overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-(--gold)/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-40 w-[400px] h-[400px] bg-(--gold)/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
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
            title="المؤسس والخبرة القيادية"
            description="الدكتور محمد طرفاوي محمد — من الكفاءات القانونية المتميزة في مجال القانون المدني بخبرة تمتد لأكثر من 15 عاماً."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex flex-col gap-5">
              <p className="text-white/70 leading-loose text-base sm:text-lg">
                الدكتور محمد طرفاوي محمد هو مؤسس المؤسسة، ويُعد من الكفاءات
                القانونية المتميزة في مجال القانون المدني. وهو محامٍ مقيد
                بالاستئناف العالي ومجلس الدولة في مصر منذ عام 2007.
              </p>
              <p className="text-white/70 leading-loose text-base sm:text-lg">
                يمتلك خبرة واسعة في مجالات التقاضي والاستشارات القانونية وتسوية
                النزاعات، وقد عمل في عدد من المؤسسات القانونية الكبرى داخل مصر
                وخارجها، واكتسب خبرة عملية كبيرة في التعامل مع القضايا المعقدة،
                خاصة في مجالات الشركات والاستثمار والتحكيم.
              </p>

              {/* Skills */}
              <div className="mt-2">
                <p className="text-(--gold) font-bold tracking-wider uppercase mb-4">
                  المهارات المهنية
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/4 border border-white/8"
                    >
                      <CheckCircle className="w-4 h-4 text-(--gold) shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                        {skill}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Qualifications */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-(--gold) font-bold tracking-wider uppercase mb-2"
            >
              المؤهلات العلمية
            </motion.p>
            {academicQualifications.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group relative flex gap-4 p-5 rounded-2xl
                    bg-white/4 border border-white/8
                    hover:border-(--gold)/20 hover:bg-white/[0.07]
                    transition-all duration-400"
              >
                {/* Icon + year */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-(--gold)/10 border border-(--gold)/20 flex items-center justify-center group-hover:bg-(--gold)/20 transition-all">
                    <GraduationCap className="w-6 h-6 text-(--gold)" />
                  </div>
                  {q.year && (
                    <span className="text-sm text-(--gold)/60 font-bold">
                      {q.year}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <p className="font-black text-white text-base sm:text-lg">
                    {q.degree}
                  </p>
                  <p className="text-sm sm:text-base text-white/60">
                    {q.institution}
                  </p>
                  {q.thesis && (
                    <p className="text-sm text-(--gold)/80 mt-1 leading-relaxed">
                      رسالة: {q.thesis}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-1 text-sm font-bold text-(--gold) bg-(--gold)/10 px-2 py-0.5 rounded-full w-fit">
                    <Star className="w-3 h-3 fill-(--gold)" />
                    {q.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;
