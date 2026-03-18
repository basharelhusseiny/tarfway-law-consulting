"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown, CheckCircle, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, serviceOptions } from "@/data";

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  isInView: boolean;
}

const ContactForm = ({ isInView }: ContactFormProps) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `*رسالة جديدة من موقع مؤسسة الطرفاوي*`,
      ``,
      `- *الاسم:* ${form.name}`,
      `- *رقم الهاتف:* ${form.phone}`,
      `- *نوع الخدمة:* ${form.service || "غير محدد"}`,
      ``,
      `- *الرسالة:*`,
      form.message,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
    setSubmitted(true);

    // Reset after 4s
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  const inputBase =
    "w-full bg-white border border-(--primary-color)/10 rounded-xl px-4 py-3.5 text-(--primary-color) font-medium placeholder:text-(--primary-color)/30 focus:outline-none focus:border-(--gold)/50 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)] transition-all duration-300 text-base";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative rounded-3xl overflow-hidden
        border border-(--primary-color)/8
        shadow-[0_20px_60px_rgba(9,25,49,0.08)]"
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark)" />

      {/* Form header */}
      <div className="bg-(--primary-color) px-7 py-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-(--gold)/15 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-(--gold)" strokeWidth={1.8} />
        </div>
        <div>
          <p className="font-black text-white text-lg leading-tight">
            أرسل رسالتك
          </p>
          <p className="text-white/60 text-xs mt-0.5">
            سنرد عليك عبر واتساب في أقرب وقت
          </p>
        </div>

        {/* WhatsApp badge */}
        <div className="mr-auto flex items-center gap-1.5 bg-[#25D366]/15 border border-[#25D366]/25 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[#25D366] text-xs font-bold">واتساب</span>
        </div>
      </div>

      {/* Form body */}
      <div className="bg-white p-7">
        {submitted ? (
          /* Success state */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-4 py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-(--gold)/10 border border-(--gold)/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-(--gold)" />
            </div>
            <h3 className="text-xl font-black text-(--primary-color)">
              تم فتح واتساب!
            </h3>
            <p className="text-(--primary-color)/60 text-sm leading-relaxed max-w-xs">
              تم إعداد رسالتك وفتح واتساب. أرسلها وسنرد عليك في أقرب وقت.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Row: Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-(--primary-color)/80 pr-1">
                  الاسم الكامل
                  <span className="text-(--gold) mr-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  required
                  className={inputBase}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-(--primary-color)/80 pr-1">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="مثال: +20 100 000 0000"
                  className={inputBase}
                  dir="ltr"
                />
              </div>
            </div>

            {/* Service select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-(--primary-color)/80 pr-1">
                نوع الخدمة المطلوبة
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none cursor-pointer`}
                >
                  <option value="">اختر نوع الخدمة...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-(--primary-color)/30 pointer-events-none"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-(--primary-color)/80 pr-1">
                تفاصيل الاستفسار
                <span className="text-(--gold) mr-0.5">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="اكتب تفاصيل استفسارك أو القضية التي تحتاج مساعدة فيها..."
                required
                rows={5}
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full flex items-center justify-center gap-3
                py-4 rounded-2xl font-black text-white text-lg
                bg-linear-to-r from-(--primary-color) to-(--primary-color)/85
                shadow-[0_8px_30px_rgba(9,25,49,0.2)]
                hover:shadow-[0_12px_40px_rgba(9,25,49,0.3)]
                hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

              <Send
                className="w-5 h-5 relative z-10 group-hover:translate-x-[-3px] transition-transform"
                strokeWidth={2}
              />
              <span className="relative z-10">إرسال عبر واتساب</span>

              {/* WhatsApp icon */}
              <svg
                className="w-5 h-5 relative z-10 opacity-70"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>

            <p className="text-center text-sm text-(--primary-color)/75 leading-relaxed">
              بالضغط على الإرسال سيتم فتح واتساب مع رسالة جاهزة لإرسالها مباشرة
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
