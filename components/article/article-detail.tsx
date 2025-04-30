"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/article/share-buttons";
import { ArticleCard } from "@/components/article/article-card";
import { Clock, Calendar, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Article } from "@/types";
import { articles } from "@/data/articles";

export function ArticleDetail({ initialArticle }: { initialArticle: Article }) {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Get related articles in the same category
    const related = articles
      .filter(a => a.category === initialArticle.category && a.id !== initialArticle.id)
      .slice(0, 3);
    setRelatedArticles(related);
  }, [initialArticle]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to all articles
      </Link>

      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <Badge className="mb-4">{initialArticle.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {initialArticle.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={initialArticle.author.avatar}
                  alt={initialArticle.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{initialArticle.author.name}</p>
                <div className="text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    {initialArticle.publishDate}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{initialArticle.readingTime} min read</span>
              </div>
              
              <ShareButtons 
                articleTitle={initialArticle.title}
                articleUrl={typeof window !== 'undefined' ? window.location.href : ''}
              />
            </div>
          </div>
        </div>
        
        {/* Article Hero Image */}
        <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] mb-8">
          <Image
            src={initialArticle.imageUrl}
            alt={initialArticle.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: initialArticle.content }}
        />
        
        {/* Author Bio */}
        <div className="bg-muted p-6 rounded-lg mb-16">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={initialArticle.author.avatar}
                alt={initialArticle.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-2">About {initialArticle.author.name}</h3>
              <p className="text-muted-foreground">{initialArticle.author.bio}</p>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(relatedArticle => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}