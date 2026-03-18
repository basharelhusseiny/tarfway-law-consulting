"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Briefcase, Globe, Star } from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";

const stats = [
  { value: "٢٠٠٧", label: "عام التأسيس", icon: Building2 },
  { value: "١٩+", label: "سنة خبرة قانونية", icon: Briefcase },
  { value: "٣", label: "دولة نشاط", icon: Globe },
  { value: "٩٨٪", label: "نسبة رضا العملاء", icon: Star },
];

const AboutFirmSection = () => {
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
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-(--gold)/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.15) 2px, transparent 1px)",
            backgroundSize: "100% 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="[&_h2]:text-white [&_p]:text-white/60">
          <SectionHeader
            isInView={isInView}
            title="عن المؤسسة"
            description="مؤسسة الطرفاوي للمحاماة والاستشارات القانونية — مؤسسة متخصصة تقدم حلولاً قانونية متكاملة للشركات والأفراد داخل مصر وخارجها."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {[
              "مؤسسة الطرفاوي للمحاماة والاستشارات القانونية هي مؤسسة متخصصة في تقديم خدمات المحاماة والاستشارات القانونية في مختلف مجالات القانون، وتعمل على تقديم حلول قانونية متكاملة تلبي احتياجات الشركات والأفراد.",
              "تأسست المؤسسة عام ٢٠٠٧ على يد الدكتور محمد طرفاوي محمد، بهدف تقديم خدمات قانونية احترافية تعتمد على الشفافية والدقة، مع مساعدة العملاء على تحقيق أعلى درجات الالتزام القانوني في أعمالهم المختلفة.",
              "وتسعى المؤسسة إلى تقديم نموذج حديث للعمل القانوني يقوم على العمل المؤسسي والتخصص، مع التركيز على تحقيق أفضل النتائج القانونية لعملائها من خلال تقديم استشارات دقيقة وتمثيل قانوني قوي أمام مختلف الجهات القضائية.",
            ].map((text, i) => (
              <p
                key={i}
                className="text-white/70 leading-loose text-base sm:text-lg"
              >
                {text}
              </p>
            ))}
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="group flex flex-col gap-3 p-5 rounded-2xl
                    bg-white/4 border border-white/8
                    hover:bg-white/[0.07] hover:border-(--gold)/20
                    transition-all duration-400"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-(--gold)/10 border border-(--gold)/15 group-hover:bg-(--gold)/20 transition-all">
                    <Icon className="w-6 h-6 text-(--gold)" />
                  </div>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-white/60 font-semibold">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirmSection;
