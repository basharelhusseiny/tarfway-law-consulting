"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  BookOpen,
  FileText,
  Calendar,
  ExternalLink,
  ArrowLeft,
  Globe,
  Download,
  Tag,
  User,
} from "lucide-react";
import { books } from "@/data/booksData";

const SingleBook = () => {
  const params = useParams();
  const id = params.id as string;

  console.log("Params:", params);
  console.log("Book ID:", id);
  console.log(
    "Available books:",
    books.map((b) => b.id),
  );

  const book = books.find((b) => b.id === id);

  console.log("Found book:", book);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-black text-(--primary-color)">
            الكتاب غير موجود
          </h1>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 mt-4 text-(--gold-dark) font-bold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            العودة للكتب
          </Link>
        </div>
      </div>
    );
  }

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true });

  const [activeLink, setActiveLink] = useState<"google" | "playstore" | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-(--primary-color) py-12 lg:py-20 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-(--gold)/10 rounded-full blur-[120px]" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-(--gold)/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-(--gold)/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,.2) 1px, transparent 1px)",
              backgroundSize: "100% 80px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-(--gold)/8 animate-spin-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-110 h-110 rounded-full border border-(--gold)/5 pointer-events-none" />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Book Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex justify-center relative pt-8 lg:pt-0"
            >
              {/* Spinning gold ring */}
              <div className="absolute inset-0 items-center justify-center pointer-events-none hidden lg:flex">
                <div className="w-105 h-105 rounded-full border-2 border-(--gold)/20 animate-spin-slow" />
              </div>
              <div className="absolute inset-0 items-center justify-center pointer-events-none hidden lg:flex">
                <div className="w-85 h-85 rounded-full border border-(--gold)/70" />
              </div>

              {/* Main image card */}
              <div className="relative z-10">
                <div className="absolute inset-4 -bottom-6 bg-(--primary-color)/10 rounded-4xl blur-2xl" />

                <div
                  className="relative bg-linear-to-b from-(--gold)/20 via-white to-(--gold)/5
                    border border-(--gold)/20 rounded-4xl overflow-hidden
                    shadow-[0_20px_60px_rgba(9,25,49,0.12)]
                    w-70 sm:w-85 lg:w-100"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-(--gold) to-(--gold-dark)" />

                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-auto object-contain p-6"
                  />
                </div>
              </div>
            </motion.div>

            {/* Book Info */}
            <div className="flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/5 border border-white/10"
              >
                <BookOpen className="w-4 h-4 text-(--gold)" />
                <span className="text-sm font-semibold text-white/70">
                  تفاصيل الكتاب
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-snug text-white"
              >
                {book.title}
              </motion.h1>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2 text-lg text-(--gold-light) font-semibold"
              >
                <User className="w-5 h-5" />
                {book.author}
              </motion.div>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center gap-4 text-sm text-white/70"
              >
                <span className="flex items-center gap-1.5 font-semibold">
                  <Calendar className="w-4 h-4 text-(--gold)" />
                  {book.publishDate}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center gap-1.5 font-semibold">
                  <FileText className="w-4 h-4 text-(--gold)" />
                  {book.pages} صفحة
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center gap-1.5 font-semibold">
                  <Globe className="w-4 h-4 text-(--gold)" />
                  {book.language === "ar" ? "العربية" : book.language}
                </span>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto pt-2"
              >
                <a
                  href={book.googleBooksLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveLink("google")}
                  onMouseLeave={() => setActiveLink(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                    bg-(--gold) text-(--primary-color) font-black
                    hover:bg-(--gold-light) hover:scale-105
                    transition-all duration-300 shadow-lg"
                >
                  <Globe className="w-5 h-5" />
                  <span>Google Books</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={book.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveLink("playstore")}
                  onMouseLeave={() => setActiveLink(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                    bg-white/10 border border-white/20 text-white font-black
                    hover:bg-white/20 hover:scale-105
                    transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Play Store</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-transparent to-white/5 pointer-events-none" />
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-12
                border border-(--primary-color)/8
                shadow-[0_2px_20px_rgba(9,25,49,0.04)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-(--gold)/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-(--gold)" />
                </div>
                <h2 className="text-2xl font-black text-(--primary-color)">
                  نبذة عن الكتاب
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-(--primary-color)/80 font-semibold leading-loose whitespace-pre-line">
                  {book.description}
                </p>
              </div>
            </motion.div>

            {/* Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-12
                border border-(--primary-color)/8
                shadow-[0_2px_20px_rgba(9,25,49,0.04)]
                mt-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-(--gold)/10 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-(--gold)" />
                </div>
                <h2 className="text-2xl font-black text-(--primary-color)">
                  الكلمات المفتاحية
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {book.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-(--primary-color)/5
                      text-sm font-semibold text-(--primary-color)/70
                      border border-(--primary-color)/8
                      hover:bg-(--gold)/10 hover:text-(--gold-dark)
                      hover:border-(--gold)/20
                      transition-all duration-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Book Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
            >
              <div
                className="bg-white rounded-2xl p-6
                border border-(--primary-color)/8
                shadow-[0_2px_20px_rgba(9,25,49,0.04)]
                hover:shadow-[0_8px_30px_rgba(9,25,49,0.08)]
                hover:border-(--gold)/20
                transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-(--gold)/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-(--gold)" />
                </div>
                <p className="text-3xl font-black text-(--primary-color)">
                  {book.pages}
                </p>
                <p className="text-sm text-(--primary-color)/60 font-semibold mt-1">
                  عدد الصفحات
                </p>
              </div>

              <div
                className="bg-white rounded-2xl p-6
                border border-(--primary-color)/8
                shadow-[0_2px_20px_rgba(9,25,49,0.04)]
                hover:shadow-[0_8px_30px_rgba(9,25,49,0.08)]
                hover:border-(--gold)/20
                transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-(--gold)/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-(--gold)" />
                </div>
                <p className="text-3xl font-black text-(--primary-color)">
                  {book.publishDate}
                </p>
                <p className="text-sm text-(--primary-color)/60 font-semibold mt-1">
                  تاريخ النشر
                </p>
              </div>

              <div
                className="bg-white rounded-2xl p-6
                border border-(--primary-color)/8
                shadow-[0_2px_20px_rgba(9,25,49,0.04)]
                hover:shadow-[0_8px_30px_rgba(9,25,49,0.08)]
                hover:border-(--gold)/20
                transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-(--gold)/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-(--gold)" />
                </div>
                <p className="text-3xl font-black text-(--primary-color)">
                  {book.language === "ar" ? "العربية" : book.language}
                </p>
                <p className="text-sm text-(--primary-color)/60 font-semibold mt-1">
                  اللغة
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBook;
