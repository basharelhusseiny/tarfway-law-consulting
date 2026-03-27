"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Calendar,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { books } from "@/data/booksData";

const BooksPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true });

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
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <BookOpen className="w-4 h-4 text-(--gold)" />
              <span className="text-sm font-semibold text-white/70">
                المكتبة القانونية
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-tight text-white"
            >
              الكتب{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-(--gold) to-(--gold-light) bg-clip-text text-transparent">
                  القانونية
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.75 bg-linear-to-r from-(--gold) to-transparent rounded-full" />
              </span>{" "}
              المتخصصة
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={heroInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-20 h-px bg-linear-to-r from-(--gold) to-transparent" />
              <FileText className="w-5 h-5 text-(--gold)" />
              <div className="w-20 h-px bg-linear-to-l from-(--gold) to-transparent" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-xl text-white/65 leading-loose max-w-2xl"
            >
              مجموعة من المؤلفات القانونية المتخصصة للدكتور محمد طرفاوي محمد،
              تغطي مختلف جوانب القانون المدني والتجاري والوسائل البديلة لتسوية
              المنازعات.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <p className="text-3xl font-black text-(--gold-light)">
                  {books.length}
                </p>
                <p className="text-sm text-white/60 font-semibold mt-1">كتاب</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-black text-(--gold-light)">
                  {books.reduce((acc, book) => acc + book.pages, 0)}
                </p>
                <p className="text-sm text-white/60 font-semibold mt-1">صفحة</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-transparent to-white/5 pointer-events-none" />
      </section>

      {/* Books Grid Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={`/books/${book.id}`} className="group block h-full">
                  <div
                    className="h-full flex flex-col rounded-3xl overflow-hidden
                      border border-(--primary-color)/8 bg-white
                      shadow-[0_2px_20px_rgba(9,25,49,0.04)]
                      hover:shadow-[0_16px_50px_rgba(9,25,49,0.10)]
                      hover:border-(--gold)/25
                      hover:-translate-y-1
                      transition-all duration-400"
                  >
                    {/* Gold top accent */}
                    <div className="h-0.75 bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark) shrink-0" />

                    {/* Image section */}
                    <div className="relative bg-linear-to-br from-(--primary-color) to-(--primary-color)/85 h-48 sm:h-56 overflow-hidden shrink-0">
                      {/* Decorative background elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-2 border-(--gold)/15 animate-spin-slow" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-(--gold)/10" />
                      </div>

                      {/* Dot pattern */}
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, rgba(201,168,76,0.8) 1.5px, transparent 1.5px)",
                          backgroundSize: "24px 24px",
                        }}
                      />

                      {/* Book image */}
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div
                          className="relative w-full h-full flex items-center justify-center
                            group-hover:scale-105 transition-transform duration-400"
                        >
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-auto h-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Bottom gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-(--primary-color)/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-6 flex-1">
                      {/* Author */}
                      <div className="flex items-center gap-2 text-sm text-(--primary-color)/70">
                        <BookOpen className="w-4 h-4 text-(--gold)" />
                        <span className="font-semibold truncate">
                          {book.author}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-black text-(--primary-color) text-lg sm:text-xl leading-snug group-hover:text-(--primary-color) transition-colors line-clamp-3">
                        {book.title}
                      </h3>

                      {/* Meta row */}
                      <div className="flex items-center gap-4 text-sm text-(--primary-color)/60">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Calendar className="w-4 h-4 text-(--gold)" />
                          {book.publishDate}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-(--primary-color)/20" />
                        <span className="flex items-center gap-1.5 font-semibold">
                          <FileText className="w-4 h-4 text-(--gold)" />
                          {book.pages} صفحة
                        </span>
                      </div>

                      {/* Keywords preview */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {book.keywords.slice(0, 3).map((keyword, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full bg-(--primary-color)/5
                              text-xs font-semibold text-(--primary-color)/70
                              border border-(--primary-color)/8"
                          >
                            {keyword}
                          </span>
                        ))}
                        {book.keywords.length > 3 && (
                          <span
                            className="px-2.5 py-1 rounded-full bg-(--gold)/10
                            text-xs font-semibold text-(--gold-dark)
                            border border-(--gold)/20"
                          >
                            +{book.keywords.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-(--primary-color)/6 mt-auto">
                        <div className="flex items-center gap-1.5">
                          <div className="w-10 h-0.5 bg-linear-to-r from-(--gold) to-(--gold-dark) rounded-full group-hover:w-20 transition-all duration-500" />
                          <div className="w-2 h-2 rounded-full bg-(--gold) animate-pulse" />
                        </div>
                        <span
                          className="flex items-center gap-1.5 font-bold text-(--gold-dark)
                            group-hover:gap-2.5 transition-all duration-300"
                        >
                          عرض الكتاب
                          <ArrowLeft className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BooksPage;
