"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/Headers/SectionHeader";
import { experiences } from "@/data";

const AboutExperienceSection = () => {
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
          title="الخبرات العملية"
          description="مسيرة مهنية ممتدة داخل مصر وخارجها، تجمع بين العمل في مؤسسات قانونية مرموقة وتنوع في الخبرات والتخصصات."
        />

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Timeline vertical line */}
          <div className="absolute right-[22px] lg:right-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--gold) via-(--gold)/30 to-transparent" />

          <div className="flex flex-col gap-4">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center w-full ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  } pr-12 lg:pr-0`}
                >
                  {/* Dot */}
                  <div className="absolute right-[14px] lg:right-1/2 lg:translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-(--gold) border-4 border-white shadow-[0_0_0_2px_rgba(201,168,76,0.3)] z-10 shrink-0" />

                  {/* Content Card */}
                  <div
                    className={`group w-full lg:w-[45%] p-5 rounded-2xl
                      border border-(--gold)/25 bg-white
                      hover:border-(--gold)/55 hover:shadow-[0_8px_30px_rgba(9,25,49,0.06)]
                      transition-all duration-400`}
                  >
                    <p className="font-black text-(--primary-color) text-base leading-snug">
                      {exp.role}
                    </p>
                    <p className="text-base text-(--gold-dark) font-bold mt-1">
                      {exp.period}
                    </p>
                    <div className="w-8 h-0.5 bg-linear-to-r from-(--gold) to-(--gold-dark) rounded-full mt-3 group-hover:w-16 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperienceSection;
