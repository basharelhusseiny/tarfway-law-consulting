"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Scale,
  Users,
  Lightbulb,
  ShieldCheck,
  ClipboardCheck,
  Globe,
} from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";

const reasons = [
  {
    icon: Scale,
    title: "خبرة قانونية متخصصة",
    description:
      "نمتلك خبرة واسعة في مختلف مجالات القانون من خلال العمل في العديد من القضايا والنزاعات القانونية داخل مصر وخارجها.",
    accent: "from-(--gold)/10 to-(--gold)/5",
  },
  {
    icon: Users,
    title: "فريق قانوني محترف",
    description:
      "يضم فريق العمل مجموعة من الكوادر القانونية المتخصصة التي تعمل بروح الفريق لتقديم أفضل الحلول القانونية للعملاء.",
    accent: "from-(--primary-color)/8 to-(--primary-color)/3",
  },
  {
    icon: Lightbulb,
    title: "حلول قانونية مبتكرة",
    description:
      "نحرص على تقديم حلول قانونية عملية ومبتكرة تتناسب مع طبيعة القضايا والتحديات القانونية المختلفة.",
    accent: "from-(--gold)/10 to-(--gold)/5",
  },
  {
    icon: ShieldCheck,
    title: "التزام بالشفافية والمهنية",
    description:
      "نلتزم بأعلى معايير الشفافية والمصداقية في التعامل مع العملاء، مع توضيح جميع الجوانب القانونية المتعلقة بالقضايا.",
    accent: "from-(--primary-color)/8 to-(--primary-color)/3",
  },
  {
    icon: ClipboardCheck,
    title: "متابعة مستمرة للقضايا",
    description:
      "نحرص على متابعة جميع الإجراءات القانونية والقضايا الخاصة بعملائنا بشكل مستمر لضمان تحقيق أفضل النتائج.",
    accent: "from-(--gold)/10 to-(--gold)/5",
  },
  {
    icon: Globe,
    title: "شبكة علاقات قانونية",
    description:
      "تمتلك المؤسسة شبكة من الشراكات المهنية والتعاون القانوني داخل مصر وخارجها مما يساهم في تقديم خدمات قانونية متكاملة.",
    accent: "from-(--primary-color)/8 to-(--primary-color)/3",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gold glow top-right */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-(--gold)/15 rounded-full blur-3xl" />
        {/* Soft primary glow bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-(--primary-color)/15 rounded-full blur-3xl" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary-color) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <SectionHeader
          isInView={isInView}
          title="لماذا تختار مؤسسة الطرفاوي للمحاماة والاستشارات القانونية"
          description="نحرص في مؤسسة الطرفاوي للمحاماة والاستشارات القانونية على تقديم خدمات قانونية متكاملة تعتمد على الخبرة المتخصصة والعمل المؤسسي المنظم، مع الالتزام بأعلى معايير الاحترافية والشفافية لضمان حماية مصالح عملائنا وتحقيق أفضل النتائج القانونية لهم."
        />

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative rounded-3xl p-7 transition-all duration-500
                  bg-white border border-(--primary-color)/[0.07]
                  shadow-[0_2px_20px_rgba(9,25,49,0.04)]
                  hover:shadow-[0_12px_40px_rgba(9,25,49,0.08)]
                  hover:border-(--gold)/25 hover:-translate-y-1"
              >
                {/* Top accent gradient stripe */}
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-linear-to-r from-(--gold)/40 via-(--gold) to-(--gold)/40 opacity-40 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col gap-4">
                  {/* Icon container */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center
                      bg-linear-to-br from-(--primary-color)/6 to-(--gold)/8
                      border border-(--primary-color)/6
                      group-hover:from-(--gold)/15 group-hover:to-(--gold)/10
                      group-hover:border-(--gold)/20
                      transition-all duration-500"
                  >
                    <Icon className="w-7 h-7 group-hover:text-(--primary-color)/60 text-(--gold-dark) transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-(--primary-color) group-hover:text-(--primary-color) transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-(--primary-color)/70 leading-relaxed group-hover:text-(--primary-color)/65 transition-colors duration-300">
                    {reason.description}
                  </p>

                  {/* Bottom expanding line */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-10 group-hover:w-20 h-[2px] bg-linear-to-r from-(--gold) to-(--gold-dark) rounded-full transition-all duration-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-(--gold) opacity-100 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
