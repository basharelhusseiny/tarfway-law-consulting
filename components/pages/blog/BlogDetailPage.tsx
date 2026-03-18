"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Scale,
  Tag,
} from "lucide-react";
import { blogsData } from "@/data";

type BlogPost = (typeof blogsData)[0];

interface BlogDetailPageProps {
  post: BlogPost;
}

const BlogDetailPage = ({ post }: BlogDetailPageProps) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const bodyRef = useRef(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-60px" });

  // Related posts (exclude current, take max 3)
  const related = blogsData.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative bg-(--primary-color) py-12 lg:py-20 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-(--gold)/10 rounded-full blur-[120px]" />
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
        </div>

        <div className="container mx-auto px-5 relative z-10 max-w-4xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white sm:text-lg font-semibold transition-colors group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              العودة إلى المدونة
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-(--gold)/15 border border-(--gold)/25 text-(--gold-light) text-xs font-bold">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/70 text-base font-medium">
              <Calendar className="w-5 h-5 text-(--gold)/60" />
              {post.date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-[38px] font-black leading-snug text-white mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={heroInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
            style={{ transformOrigin: "right" }}
          >
            <div className="w-30 h-px bg-linear-to-r from-(--gold) to-transparent" />
            <Scale className="w-4 h-4 text-(--gold)" />
            <div className="w-30 h-px bg-linear-to-l from-(--gold) to-transparent" />
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-(--gold) to-(--gold-dark) flex items-center justify-center text-(--primary-color) font-black text-lg shadow-[0_4px_14px_rgba(201,168,76,0.3)]">
              م
            </div>
            <div>
              <p className="text-white font-bold text-lg">{post.author}</p>
              <p className="text-white/50 text-base mt-0.5">
                محامٍ مقيد بالاستئناف العالي ومجلس الدولة
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-transparent to-white/5 pointer-events-none" />
      </section>

      {/* ── ARTICLE BODY ── */}
      <section
        ref={bodyRef}
        className="relative py-12 lg:py-20 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-(--gold)/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-(--primary-color)/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-5 relative z-10 max-w-4xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* ── Main content ── */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={bodyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="prose-custom">
                {/* Section 1 */}
                <ContentSection
                  content={post.contentOne}
                  index={0}
                  isInView={bodyInView}
                />

                {/* Section 2 */}
                {post.contentTwo && (
                  <ContentSection
                    content={post.contentTwo}
                    index={1}
                    isInView={bodyInView}
                  />
                )}

                {/* Section 3 */}
                {post.contentThree && (
                  <ContentSection
                    content={post.contentThree}
                    index={2}
                    isInView={bodyInView}
                  />
                )}
              </div>

              {/* External link */}
              {post.link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={bodyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-10 p-5 rounded-2xl border border-(--gold)/20 bg-(--gold)/5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-(--gold)/15 border border-(--gold)/20 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5 text-(--gold-dark)" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-(--primary-color)/80 mb-1">
                      المقال منشور على الموقع الرسمي لنقابة المحامين المصرية
                    </p>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-(--gold-dark) font-semibold hover:underline underline-offset-2 break-all"
                    >
                      {post.link}
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.article>

            {/* ── Sidebar ── */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={bodyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 h-fit"
            >
              {/* About author card */}
              <div className="rounded-3xl overflow-hidden border border-(--primary-color)/8 shadow-[0_2px_20px_rgba(9,25,49,0.04)] bg-white">
                <div className="bg-(--primary-color) px-5 py-4 flex items-center gap-3">
                  <div className="h-5 w-0.5 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
                  <h3 className="font-black text-white">عن الكاتب</h3>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-(--gold) to-(--gold-dark) flex items-center justify-center text-(--primary-color) font-black text-xl shrink-0">
                      م
                    </div>
                    <div>
                      <p className="font-black text-(--primary-color) text-sm leading-snug">
                        د. محمد طرفاوي محمد
                      </p>
                      <p className="text-xs text-(--primary-color)/50 mt-0.5">
                        المحامى
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-(--primary-color)/75 leading-relaxed">
                    محامٍ مقيد بالاستئناف العالي ومجلس الدولة في مصر منذ عام
                    2007، متخصص في القانون المدني وله العديد من المؤلفات
                    والدراسات القانونية.
                  </p>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 font-bold text-(--gold-dark) hover:gap-3 transition-all duration-300"
                  >
                    السيرة الذاتية الكاملة
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </Link>
                </div>
              </div>

              {/* Related Articles in Sidebar */}
              <div className="rounded-3xl overflow-hidden border border-(--primary-color)/8 shadow-[0_2px_20px_rgba(9,25,49,0.04)] bg-white">
                <div className="bg-(--primary-color) px-5 py-4 flex items-center gap-3">
                  <div className="h-5 w-0.5 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
                  <h3 className="font-black text-white">مقالات مقترحة</h3>
                </div>
                <div className="p-5 flex flex-col gap-5">
                  {related.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="group flex flex-col gap-2 border-b border-(--primary-color)/5 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-(--gold-dark)">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-(--primary-color)/20" />
                        <span className="text-(--primary-color)/40">
                          {post.date}
                        </span>
                      </div>
                      <h4 className="font-bold text-(--primary-color) text-sm leading-snug group-hover:text-(--gold-dark) transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Article info */}
              <div className="rounded-2xl border border-(--primary-color)/8 p-5 flex flex-col gap-3 bg-white">
                <p className="font-bold text-(--primary-color)/70 uppercase tracking-widest mb-1 text-xs">
                  معلومات المقال
                </p>
                {[
                  { label: "التاريخ", value: post.date },
                  { label: "التصنيف", value: post.category },
                  { label: "المصدر", value: "نقابة المحامين المصرية" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm border-b border-(--primary-color)/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-(--primary-color)/60 font-medium">
                      {item.label}
                    </span>
                    <span className="font-bold text-(--primary-color)/80 text-xs">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl
                  bg-linear-to-r from-(--primary-color) to-(--primary-color)/85
                  text-white font-bold text-sm
                  shadow-[0_8px_30px_rgba(9,25,49,0.2)]
                  hover:shadow-[0_12px_40px_rgba(9,25,49,0.3)]
                  hover:-translate-y-0.5 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
                احجز استشارة قانونية
              </Link>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && <RelatedPosts posts={related} />}
    </div>
  );
};

// ─── Content section ─────────────────────────────────────────────────────────

const ContentSection = ({
  content,
  index,
  isInView,
}: {
  content: string;
  index: number;
  isInView: boolean;
}) => {
  // Split into paragraphs by double newlines / single newlines
  const paragraphs = content
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.15 }}
      className="mb-8"
    >
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-(--primary-color)/80 leading-loose text-base sm:text-lg mb-5 last:mb-0"
        >
          {para}
        </p>
      ))}
      {/* Divider between sections */}
      {index < 2 && (
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-linear-to-r from-(--gold)/20 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-(--gold)/40" />
          <div className="flex-1 h-px bg-linear-to-l from-(--gold)/20 to-transparent" />
        </div>
      )}
    </motion.div>
  );
};

// ─── Related posts ───────────────────────────────────────────────────────────

const RelatedPosts = ({ posts }: { posts: typeof blogsData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-14 lg:py-20 bg-(--primary-color) overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-(--gold)/8 rounded-full blur-3xl" />
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-7 w-1 bg-linear-to-b from-(--gold) to-transparent rounded-full" />
          <h2 className="text-2xl font-black text-white">مقالات ذات صلة</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div
                  className="h-full flex flex-col gap-4 p-5 rounded-2xl
                    bg-white/4 border border-white/8
                    hover:bg-white/[0.07] hover:border-(--gold)/20
                    transition-all duration-400"
                >
                  <div className="flex items-center gap-2 text-xs text-white/40 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-(--gold)/60" />
                    {post.date}
                  </div>
                  <h3 className="font-black text-white text-base leading-snug group-hover:text-(--gold-light) transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-(--gold)/70 group-hover:text-(--gold) group-hover:gap-2.5 transition-all duration-300 mt-auto">
                    اقرأ المزيد
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
