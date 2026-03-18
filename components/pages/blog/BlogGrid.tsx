"use client";

import { useState, useMemo, useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { blogsData } from "@/data";
import { CATEGORIES } from "@/constants";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(0); // 0 is "All"
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // 1. Get current category label
  const selectedCategoryLabel = useMemo(() => {
    return CATEGORIES.find(c => c.key === selectedCategoryKey)?.label || "الكل";
  }, [selectedCategoryKey]);

  // 2. Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategoryKey === 0) return blogsData;
    return blogsData.filter(post => post.category === selectedCategoryLabel);
  }, [selectedCategoryKey, selectedCategoryLabel]);

  // 3. Paginate filtered posts
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Handlers
  const handleCategoryChange = (key: number) => {
    setSelectedCategoryKey(key);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section
      id="blog-grid"
      ref={ref}
      className="relative py-12 lg:py-20 bg-white"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-(--gold)/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-(--primary-color)/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--gold) 1.5px, transparent 1.5px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <CategoryFilter
            selectedCategory={selectedCategoryKey}
            onCategoryChange={handleCategoryChange}
          />
        </motion.div>

        {/* Article Counter */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-(--primary-color)/40 font-semibold mb-8"
        >
          عرض {currentPosts.length} من أصل {filteredPosts.length} مقال
        </motion.p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentPosts.map((post, i) => (
              <motion.div
                key={`${selectedCategoryKey}-${currentPage}-${post.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <BlogCard post={post} index={i} isInView={true} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>

        {/* Bottom footer credit */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          className="mt-16 text-center"
        >
          <p className="text-sm text-(--primary-color) font-bold flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-linear-to-r from-transparent to-(--gold)" />
            جميع المقالات منشورة على الموقع الرسمي لنقابة المحامين المصرية
            <span className="w-8 h-px bg-linear-to-l from-transparent to-(--gold)" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;

