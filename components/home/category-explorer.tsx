"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface CategoryExplorerProps {
  onCategoryChange: (category: Category) => void;
  activeCategory: Category;
}

export function CategoryExplorer({ onCategoryChange, activeCategory }: CategoryExplorerProps) {
  const categories: Category[] = ["All", "Stories", "Health", "Inspiration"];

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case "Stories":
        return "📖";
      case "Health":
        return "🌿";
      case "Inspiration":
        return "✨";
      default:
        return "🌸";
    }
  };

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case "Stories":
        return "from-pink-400 to-rose-600";
      case "Health":
        return "from-teal-400 to-emerald-600";
      case "Inspiration":
        return "from-purple-400 to-indigo-600";
      default:
        return "from-blue-400 to-violet-600";
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-serif font-bold mb-8 text-center">Explore by Category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "relative h-32 rounded-lg p-6 flex flex-col items-center justify-center transition-all overflow-hidden group border",
              activeCategory === category 
                ? "ring-2 ring-primary ring-offset-2" 
                : "hover:scale-105"
            )}
          >
            <div 
              className={cn(
                "absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-r",
                getCategoryColor(category)
              )} 
            />
            <div className="text-3xl mb-2">{getCategoryIcon(category)}</div>
            <h3 className="font-medium text-lg z-10">{category}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}