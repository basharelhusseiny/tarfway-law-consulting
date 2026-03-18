"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { blogsData } from "@/data";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-(--gold)/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-(--primary-color)/4 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary-color) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogsData.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-(--primary-color)/40 font-medium">
            جميع المقالات منشورة على الموقع الرسمي لنقابة المحامين المصرية
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
