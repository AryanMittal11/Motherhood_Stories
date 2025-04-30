"use client";

import { useState } from "react";
import { Article, Category } from "@/types";
import { ArticleCard } from "@/components/article/article-card";
import { Search } from "@/components/search";

interface ArticleGridProps {
  articles: Article[];
  category: Category;
}

export function ArticleGrid({ articles, category }: ArticleGridProps) {
  const [searchResults, setSearchResults] = useState<Article[]>(articles);
  
  const filteredArticles = searchResults.filter(article => 
    category === "All" ? true : article.category === category
  );

  const handleSearch = (results: Article[]) => {
    setSearchResults(results);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-serif font-bold">
          {category === "All" ? "Recent Articles" : category}
        </h2>
        
        <Search articles={articles} onSearch={handleSearch} />
      </div>
      
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
          <p className="text-sm text-muted-foreground">Try changing your search or category filter.</p>
        </div>
      )}
    </div>
  );
}