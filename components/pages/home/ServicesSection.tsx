"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import {
  Scale,
  Building2,
  Gavel,
  FileText,
  Receipt,
  User,
  Lightbulb,
  TrendingUp,
  Home,
  ChevronDown,
} from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";

const services = [
  {
    icon: Scale,
    title: "حل النزاعات بالوسائل البديلة",
    short: "وساطة • تحكيم • تفاوض • توفيق",
    description:
      "تقدم المؤسسة خدمات متخصصة في تسوية النزاعات بالوسائل البديلة مثل الوساطة والتوفيق والتفاوض والتحكيم، مما يساعد على توفير الوقت والتكاليف وتحقيق حلول قانونية فعالة. كما تمتلك المؤسسة خبرة في العمل أمام المحكمة الاقتصادية في مصر ومراكز التحكيم المختلفة.",
  },
  {
    icon: Building2,
    title: "خدمات الشركات",
    short: "استشارات • تمثيل • إجراءات",
    description:
      "تقدم المؤسسة مجموعة متكاملة من الخدمات القانونية للشركات، تشمل تقديم الاستشارات القانونية الدورية وتمثيل الشركات أمام مختلف جهات القضاء. كما تساعد المؤسسة الشركات على اتخاذ القرارات القانونية الصحيحة بما يحمي مصالحها.",
  },
  {
    icon: Gavel,
    title: "خدمات التقاضي",
    short: "مدني • تجاري • جنائي • إداري",
    description:
      "تقوم المؤسسة بتمثيل عملائها أمام جميع المحاكم والجهات القضائية، بما في ذلك المحاكم المدنية والتجارية والجنائية ومحاكم مجلس الدولة. ويتابع فريق المؤسسة جميع مراحل القضايا من إعداد الدعاوى وحتى صدور الأحكام النهائية.",
  },
  {
    icon: FileText,
    title: "الخدمات الإدارية والقانونية",
    short: "سجل تجاري • هيئة الاستثمار • حكومي",
    description:
      "تقدم المؤسسة خدمات قانونية متعلقة بإنهاء الإجراءات والمعاملات الإدارية أمام الجهات الحكومية المختلفة، مثل مكاتب السجل التجاري وهيئة الاستثمار. كما تسهل الإجراءات القانونية للشركات بما يضمن الامتثال الكامل للقوانين.",
  },
  {
    icon: Receipt,
    title: "الخدمات الضريبية",
    short: "منازعات • لجان فض • محاسبة قانونية",
    description:
      "تقدم المؤسسة خدمات قانونية متعلقة بالمنازعات الضريبية وتمثيل العملاء أمام الجهات المختصة ولجان فض المنازعات الضريبية. كما تعمل بالتعاون مع متخصصين محاسبيين لتقديم حلول متكاملة تجمع الجوانب القانونية والمحاسبية.",
  },
  {
    icon: User,
    title: "خدمات الأفراد",
    short: "مدني • جنائي • ميراث • عقود",
    description:
      "تقدم المؤسسة خدمات قانونية متنوعة للأفراد تشمل القضايا المدنية والجنائية والإدارية. كما تشمل النزاعات التعاقدية وقضايا الميراث والمعاملات البنكية، بالإضافة إلى تمثيل العملاء أمام مختلف المحاكم والجهات القضائية.",
  },
  {
    icon: Lightbulb,
    title: "خدمات الملكية الفكرية",
    short: "علامات تجارية • حقوق مؤلف • براءات",
    description:
      "تقدم المؤسسة خدمات قانونية متخصصة في مجال الملكية الفكرية تشمل تسجيل العلامات التجارية والنماذج الصناعية وحماية حقوق المؤلف. كما توفر الدعم القانوني في إعداد عقود الترخيص والاستغلال لضمان حماية الحقوق.",
  },
  {
    icon: TrendingUp,
    title: "خدمات البورصة والرقابة المالية",
    short: "مستثمرون • استحواذ • اندماج",
    description:
      "تقدم المؤسسة خدمات قانونية متعلقة بالبورصة المصرية وهيئة الرقابة المالية تشمل حماية حقوق المستثمرين. كما توفر خدمات قانونية لعمليات الاستحواذ والاندماج ومتابعة حقوق المساهمين في الشركات.",
  },
  {
    icon: Home,
    title: "الخدمات العقارية",
    short: "توثيق • تسجيل • استرداد • إيجارات",
    description:
      "تقدم المؤسسة خدمات قانونية متكاملة في مجال العقارات تشمل توثيق المعاملات العقارية وتسجيل الأراضي والعقارات. كما تقدم خدمات متعلقة باسترداد العقارات والنزاعات العقارية المختلفة وقضايا قانون الإيجارات.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ServiceCard = ({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`group relative rounded-3xl border transition-all duration-500 cursor-pointer
        ${"bg-(--primary-color) border-(--gold)/20 shadow-[0_16px_50px_rgba(9,25,49,0.18)]"}`}
    >
      {/* Gold top line — always visible */}
      <div
        className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full transition-all duration-500
          ${"left-0 right-0 rounded-b-none bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark)"}`}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center transition-all duration-500
              ${"bg-(--gold)/15 border border-(--gold)/25"}`}
          >
            <Icon
              className={`w-6 h-6 transition-colors duration-300 ${"text-(--gold-light)"}`}
            />
          </div>

          {/* Title + short */}
          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-bold leading-snug transition-colors duration-300 ${"text-white"}`}
            >
              {service.title}
            </h3>
            <p
              className={`text-sm mt-1 transition-colors duration-300 ${"text-(--gold)/80"}`}
            >
              {service.short}
            </p>
          </div>

          {/* Expand icon */}
          <div
            className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-400
              ${"bg-(--gold)/15 rotate-180"}`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-colors duration-300 ${"text-(--gold-light)"}`}
            />
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {true && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-4 pt-4 border-t border-white/15 text-base text-white/75 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-(--gold)/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-(--primary-color)/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
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
          title="خدماتنا القانونية"
          description="تقدم مؤسسة الطرفاوي للمحاماة والاستشارات القانونية مجموعة متكاملة من الخدمات القانونية التي تلبي احتياجات الشركات والأفراد في مختلف المجالات. ويعمل فريقنا القانوني على تقديم حلول احترافية تعتمد على الخبرة العملية والمعرفة المتخصصة."
        />

        {/* Cards Grid — 2 cols on md, 3 on xl */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
