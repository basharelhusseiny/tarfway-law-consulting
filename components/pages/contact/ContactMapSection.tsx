"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5!2d31.18!3d29.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzQ4LjAiTiAzMcKwMTAnNDguMCJF!5e0!3m2!1sar!2seg!4v1234567890";

const ContactMapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-16 bg-(--primary-color) overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-(--gold)/8 rounded-full blur-3xl" />
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
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-7 w-1 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
            <div>
              <h2 className="text-xl font-black text-white">موقعنا</h2>
              <p className="text-white/60 mt-0.5">
                الطالبية – فيصل – الجيزة
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=الطالبية+فيصل+الجيزة"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl
              bg-(--gold)/10 border border-(--gold)/20 text-(--gold)
              text-sm font-bold hover:bg-(--gold)/20 transition-all duration-300"
          >
            <MapPin className="w-4 h-4" strokeWidth={2} />
            <span>فتح الخريطة</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" strokeWidth={2} />
          </a>
        </motion.div>

        {/* Map iframe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden border border-white/8
            shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        >
          {/* Gold top line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark) z-10" />

          <iframe
            src={MAP_EMBED}
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع مؤسسة الطرفاوي"
            className="block"
          />

          {/* Overlay bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-(--primary-color)/60 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMapSection;
