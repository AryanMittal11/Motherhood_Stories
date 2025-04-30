import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link 
      href={`/articles/${article.id}`}
      className={cn(
        "group block rounded-lg overflow-hidden border bg-card transition-all hover:shadow-md",
        featured && "md:col-span-2"
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary hover:bg-primary/90">
            {article.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-muted-foreground">{article.author.name}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}