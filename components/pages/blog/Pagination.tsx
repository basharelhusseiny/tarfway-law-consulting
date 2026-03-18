"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    // Smooth scroll to top of content area
    const contentArea = document.getElementById("blog-grid");
    if (contentArea) {
      const offset = 100; // Offset for header
      const elementPosition = contentArea.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const params = useParams();
  const locale = params.locale as string || "ar"; // Default to ar
  const isAr = locale === "ar";

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-16 mb-12">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="group relative p-2.5 sm:p-3.5 rounded-2xl border border-(--primary-color)/5 text-(--primary-color)/40 
          hover:border-(--gold)/30 hover:text-(--gold-dark) hover:bg-(--gold)/5 
          disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-500 bg-white shadow-sm"
        aria-label="Previous page"
      >
        {isAr ? (
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        ) : (
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        )}
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === "..."}
            className={`relative w-10 sm:w-12 h-10 sm:h-12 rounded-2xl font-black transition-all duration-500 flex items-center justify-center text-sm sm:text-base ${
              page === currentPage
                ? "text-white shadow-[0_8px_20px_rgba(201,168,76,0.3)] scale-110 -translate-y-0.5"
                : page === "..."
                  ? "cursor-default text-(--primary-color)/20"
                  : "bg-white border border-(--primary-color)/5 text-(--primary-color)/50 hover:border-(--gold)/30 hover:text-(--gold-dark) hover:bg-(--gold)/5 hover:-translate-y-0.5"
            }`}
            style={
              page === currentPage
                ? { background: "linear-gradient(135deg, var(--gold), var(--gold-dark))" }
                : {}
            }
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="group relative p-2.5 sm:p-3.5 rounded-2xl border border-(--primary-color)/5 text-(--primary-color)/40 
          hover:border-(--gold)/30 hover:text-(--gold-dark) hover:bg-(--gold)/5 
          disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-500 bg-white shadow-sm"
        aria-label="Next page"
      >
        {isAr ? (
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        ) : (
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default Pagination;
