"use client";

import { CATEGORIES } from "@/constants";
import { blogsData } from "@/data";

interface CategoryFilterProps {
  selectedCategory: number;
  onCategoryChange: (categoryKey: number) => void;
}

const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.key;
          
          // Calculate count based on category label (except for "All")
          const count = category.key === 0 
            ? blogsData.length 
            : blogsData.filter((b) => b.category === category.label).length;

          return (
            <button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold transition-all duration-500 overflow-hidden group 
                ${isActive 
                  ? "text-white shadow-[0_8px_25px_rgba(201,168,76,0.25)] -translate-y-1" 
                  : "bg-white border border-(--primary-color)/15 text-(--primary-color)/70 hover:border-(--gold)/30 hover:text-(--gold-dark) hover:-translate-y-0.5"
                }`}
              style={
                isActive 
                  ? { background: "linear-gradient(135deg, var(--primary-color), #1a2e4a)" } 
                  : {}
              }
            >
              {/* Shimmer effect for active button */}
              {isActive && (
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
              )}
              
              <span className="relative z-10 text-sm sm:text-base">
                {category.label}
              </span>

              {/* Count badge */}
              <span
                className={`relative z-10 flex items-center justify-center min-w-[24px] h-[24px] px-1.5 rounded-lg text-sm font-black tabular-nums transition-all duration-500
                  ${isActive 
                    ? "bg-white/20 text-white" 
                    : "bg-(--primary-color)/5 text-(--primary-color)/60 group-hover:bg-(--gold)/10 group-hover:text-(--gold-dark)"
                  }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
