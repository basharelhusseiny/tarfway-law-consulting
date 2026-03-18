"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Building2, Globe, Users } from "lucide-react";
import SectionHeader from "@/components/ui/Headers/SectionHeader";
import { egyptClients, kuwaitClients } from "@/data";

interface ClientListProps {
  title: string;
  icon: React.ElementType;
  clients: string[];
}

const ClientList = ({ title, icon: Icon, clients }: ClientListProps) => (
  <div className="rounded-3xl border border-(--primary-color)/15 overflow-hidden shadow-[0_2px_20px_rgba(9,25,49,0.04)]">
    <div className="bg-(--primary-color) px-6 py-4 flex items-center gap-3">
      <div className="w-8 h-8 rounded-xl bg-(--gold)/25 flex items-center justify-center">
        <Icon className="w-4 h-4 text-(--gold)" />
      </div>
      <h3 className="font-black text-white text-lg">{title}</h3>
    </div>
    <div className="p-6 flex flex-col gap-3">
      {clients.map((client, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 rounded-xl border border-(--primary-color)/10 hover:border-(--gold)/25 bg-(--gold)/5 hover:bg-(--gold)/15 transition-all duration-300"
        >
          <div className="w-2 h-2 rounded-full bg-(--gold) shrink-0" />
          <p className="text-(--primary-color)/80 font-semibold">{client}</p>
        </div>
      ))}
    </div>
  </div>
);

const AboutClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-(--gold)/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-(--primary-color)/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <SectionHeader
          isInView={isInView}
          title="عملاؤنا وشركاؤنا"
          description="تفخر مؤسسة الطرفاوي بثقة العديد من الشركات والمؤسسات داخل مصر وخارجها، حيث قدمت خدمات قانونية متميزة في مختلف المجالات."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }} // Slide from left for Egyptian clients
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ClientList
              title="داخل مصر"
              icon={Building2}
              clients={egyptClients}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} // Slide from right for Kuwaiti clients
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ClientList
              title="في دولة الكويت"
              icon={Globe}
              clients={kuwaitClients}
            />
          </motion.div>
        </div>

        {/* Partnership note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <div className="rounded-2xl p-5 border border-(--gold)/20 bg-(--gold)/8 flex items-start gap-4">
            <Users className="w-6 h-6 text-(--gold-dark) shrink-0 mt-0.5" />
            <p className="font-medium text-(--primary-color)/70 leading-relaxed text-sm sm:text-base">
              تم التعامل مع العملاء الكويتيين من خلال التعاون مع مكاتب محاماة
              كويتية كبرى مثل{" "}
              <span className="font-bold text-(--primary-color)">
                مجموعة التويجري للمحاماة
              </span>{" "}
              و
              <span className="font-bold text-(--primary-color)">
                {" "}
                شركة مشاري العصيمي للمحاماة
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutClientsSection;
