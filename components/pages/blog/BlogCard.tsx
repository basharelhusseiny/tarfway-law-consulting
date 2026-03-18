"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import { blogsData } from "@/data";

type BlogPost = (typeof blogsData)[0];

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isInView: boolean;
}

const BlogCard = ({ post, index, isInView }: BlogCardProps) => {
  // Trim the preview text to ~180 chars
  const preview =
    post.contentOne.trim().length > 200
      ? post.contentOne.trim().slice(0, 200).trimEnd() + "..."
      : post.contentOne.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/blog/${post.id}`} className="group block h-full">
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
          <div className="h-[3px] bg-linear-to-r from-(--gold) via-(--gold-light) to-(--gold-dark) shrink-0" />

          {/* ── Image placeholder ── */}
          <div className="relative bg-linear-to-br from-(--primary-color) to-(--primary-color)/85 h-44 sm:h-52 overflow-hidden shrink-0">
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

            {/* Category badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-(--gold)/15 border border-(--gold)/25 text-(--gold-light) text-xs font-bold">
                <BookOpen className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-(--gold)/10 border border-(--gold)/20 flex items-center justify-center group-hover:bg-(--gold)/20 group-hover:scale-110 transition-all duration-400">
                <BookOpen className="w-8 h-8 text-(--gold)" />
              </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-(--primary-color)/60 to-transparent" />
          </div>

          {/* ── Content ── */}
          <div className="flex flex-col gap-4 p-6 flex-1">
            {/* Meta row */}
            <div className="flex items-center gap-4 text-sm text-(--primary-color)/70">
              <span className="flex items-center gap-1.5 font-semibold">
                <Calendar className="w-5 h-5 text-(--gold)" />
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-(--primary-color)/20" />
              <span className="flex items-center gap-1.5 font-semibold truncate">
                <User className="w-5 h-5 shrink-0 text-(--gold)" />
                <span className="truncate">د. محمد طرفاوي</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="font-black text-(--primary-color) text-lg sm:text-xl leading-snug group-hover:text-(--primary-color) transition-colors line-clamp-3">
              {post.title}
            </h3>

            {/* Preview */}
            <p className="text-(--primary-color)/60 text-sm leading-relaxed line-clamp-3 flex-1">
              {preview}
            </p>

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
                اقرأ المزيد
                <ArrowLeft className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
