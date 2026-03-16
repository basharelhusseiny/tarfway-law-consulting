"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "./Headers/SectionHeader";

export const testimonials = [
  {
    name: "أحمد محمود",
    role: "مدير شركة استثمار",
    review:
      "تعاملت مع مؤسسة الطرفاوي في عدة استشارات قانونية خاصة بالشركات، وكان مستوى الاحترافية والمتابعة ممتاز.",
  },
  {
    name: "محمد عبد الرحمن",
    role: "رجل أعمال",
    review:
      "قدمت المؤسسة دعماً قانونياً مهماً في إحدى القضايا التجارية الخاصة بشركتي، وتم التعامل مع القضية باحترافية عالية.",
  },
  {
    name: "محمود حسن",
    role: "مدير شركة عقارية",
    review:
      "خبرة واضحة في القضايا العقارية والإجراءات القانونية المتعلقة بالشركات. أنصح بالتعامل مع المؤسسة لأي شركة تحتاج إلى دعم قانوني متخصص.",
  },
  {
    name: "عبدالله سامي",
    role: "مستثمر",
    review:
      "فريق محترف يقدم استشارات قانونية دقيقة وسريعة. ساعدوني في تسوية نزاع تجاري بطريقة احترافية دون الحاجة إلى الدخول في إجراءات قضائية طويلة.",
  },
  {
    name: "خالد يوسف",
    role: "مدير شركة تجارة",
    review:
      "التعامل مع مؤسسة الطرفاوي كان تجربة مميزة، خاصة في متابعة الإجراءات القانونية والتواصل المستمر معنا لإطلاعنا على كل تفاصيل القضية.",
  },
  {
    name: "حسن علي",
    role: "صاحب شركة خدمات",
    review:
      "استفدنا كثيراً من الاستشارات القانونية التي قدمتها المؤسسة في تنظيم الأعمال القانونية داخل الشركة وتجنب الكثير من المشكلات القانونية.",
  },
  {
    name: "طارق إبراهيم",
    role: "مستثمر عقاري",
    review:
      "المؤسسة تمتلك خبرة قوية في القضايا العقارية والإجراءات القانونية المتعلقة بتسجيل العقارات وحماية الحقوق القانونية.",
  },
  {
    name: "ياسر فؤاد",
    role: "مدير مالي",
    review:
      "الدقة والاحترافية في العمل كانت واضحة منذ أول تعامل. تم التعامل مع قضيتنا بسرعة وكفاءة عالية.",
  },
  {
    name: "عمر خالد",
    role: "صاحب شركة ناشئة",
    review:
      "قدمت المؤسسة دعماً قانونياً مهماً لشركتنا الناشئة وساعدتنا في فهم الجوانب القانونية المتعلقة بإدارة الأعمال.",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-20 bg-(--primary-color) relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-(--gold)/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-40 w-[400px] h-[400px] bg-(--gold)/10 rounded-full blur-3xl" />
        {/* Horizontal lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.2) 1px, transparent 1px)",
            backgroundSize: "100% 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Header — white text on dark */}
        <div className="[&_h2]:text-white [&_p]:text-white/60">
          <SectionHeader
            isInView={isInView}
            title="آراء عملائنا"
            description="نفخر بثقة عملائنا الكرام وشهاداتهم على جودة خدماتنا القانونية واحترافية فريق عملنا"
          />
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="testimonials-swiper pb-14!"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div
                  className="group relative h-full flex flex-col rounded-3xl p-6
                    bg-white/4 border border-white/8
                    hover:bg-white/[0.07] hover:border-(--gold)/20
                    transition-all duration-500"
                >
                  {/* Quote icon */}
                  <div className="absolute top-5 left-5 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Quote
                      className="w-12 h-12 text-(--gold)"
                      fill="currentColor"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-(--gold) fill-(--gold)"
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-white/70 leading-loose text-sm grow relative z-10">
                    {t.review}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-linear-to-r from-transparent via-(--gold)/25 to-transparent my-5" />

                  {/* Author info */}
                  <div className="flex items-center gap-3 relative z-10">
                    {/* Avatar */}
                    <div
                      className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center
                        bg-linear-to-br from-(--gold) to-(--gold-dark) text-(--primary-color)
                        font-black text-lg shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
                    >
                      {t.name.charAt(0)}
                    </div>

                    {/* Name & role */}
                    <div className="text-right flex-1 min-w-0">
                      <p className="font-bold text-white text-base leading-tight group-hover:text-(--gold-light) transition-colors duration-300">
                        {t.name}
                      </p>
                      <p className="text-xs text-white/45 mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-t-full bg-linear-to-r from-(--gold)/0 via-(--gold)/30 to-(--gold)/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
