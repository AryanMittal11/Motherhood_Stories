"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Article } from "@/types";

interface SearchProps {
  articles: Article[];
  onSearch: (results: Article[]) => void;
}

export function Search({ articles, onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      onSearch(articles);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const results = articles.filter(
      article => 
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery) ||
        article.category.toLowerCase().includes(lowerQuery) ||
        article.author.name.toLowerCase().includes(lowerQuery)
    );
    
    onSearch(results);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Search articles..."
        className="pr-10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button 
        type="submit" 
        size="icon" 
        variant="ghost" 
        className="absolute right-0 top-0"
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}