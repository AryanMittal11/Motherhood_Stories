"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  articles: Article[];
}

export function HeroCarousel({ articles }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredArticles = articles.filter(article => article.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => 
        currentIndex === featuredArticles.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex) => 
      currentIndex === 0 ? featuredArticles.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex) => 
      currentIndex === featuredArticles.length - 1 ? 0 : currentIndex + 1
    );
  };

  if (!featuredArticles.length) return null;

  const currentArticle = featuredArticles[currentIndex];

  return (
    <div className="relative rounded-lg overflow-hidden h-[450px] md:h-[550px] group">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/60">
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="max-w-2xl">
            <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded mb-3 inline-block">
              {currentArticle.category}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md">
              {currentArticle.title}
            </h2>
            <p className="text-white mb-6 md:text-lg max-w-prose hidden sm:block drop-shadow-md">
              {currentArticle.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <Link href={`/articles/${currentArticle.id}`}>
                <Button className="bg-white hover:bg-gray-100 text-black">
                  Read Article
                </Button>
              </Link>
              <div className="text-white text-sm">
                {currentIndex + 1} / {featuredArticles.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-y-0 left-4 z-20 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-black/30 hover:bg-black/50 text-white hidden sm:flex" 
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute inset-y-0 right-4 z-20 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-black/30 hover:bg-black/50 text-white hidden sm:flex" 
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <Image
        src={currentArticle.imageUrl}
        alt={currentArticle.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority
      />
    </div>
  );
}