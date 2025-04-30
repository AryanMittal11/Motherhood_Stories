"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { CategoryExplorer } from "@/components/home/category-explorer";
import { ArticleGrid } from "@/components/home/article-grid";
import { Sidebar } from "@/components/home/sidebar";
import { Category } from "@/types";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <HeroCarousel articles={articles} />
      </section>

      {/* Category Explorer */}
      <section className="mb-16" id="categories">
        <CategoryExplorer 
          onCategoryChange={setActiveCategory} 
          activeCategory={activeCategory}
        />
      </section>

      {/* Main Content Area */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ArticleGrid articles={articles} category={activeCategory} />
          </div>
          
          <aside>
            <Sidebar featuredArticles={featuredArticles} />
          </aside>
        </div>
      </section>

      {/* Category Sections */}
      <section id="stories" className="py-8">
        <h2 className="text-2xl font-serif font-bold mb-8">
          Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles
            .filter(article => article.category === "Stories")
            .slice(0, 3)
            .map(article => (
              <div key={article.id} className="mb-6">
                <blockquote className="italic border-l-4 border-primary pl-4 mb-2">
                  "{article.title}"
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  — {article.author.name}
                </p>
              </div>
            ))}
        </div>
      </section>

      <section id="health" className="py-8">
        <h2 className="text-2xl font-serif font-bold mb-8">
          Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles
            .filter(article => article.category === "Health")
            .slice(0, 3)
            .map(article => (
              <div key={article.id} className="mb-6">
                <h3 className="font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            ))}
        </div>
      </section>

      <section id="inspiration" className="py-8">
        <h2 className="text-2xl font-serif font-bold mb-8">
          Inspiration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles
            .filter(article => article.category === "Inspiration")
            .slice(0, 3)
            .map(article => (
              <div key={article.id} className="mb-6">
                <h3 className="font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}