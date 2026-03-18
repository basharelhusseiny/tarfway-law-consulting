"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfoSidebar from "./ContactInfoSidebar";

const ContactMainSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-(--gold)/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-(--primary-color)/10 rounded-full blur-3xl" />
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── Form (wider col) ── */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <ContactForm isInView={isInView} />
          </div>

          {/* ── Info Sidebar ── */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <ContactInfoSidebar isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMainSection;
