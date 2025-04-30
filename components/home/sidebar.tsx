import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";
import { cn } from "@/lib/utils";

interface SidebarProps {
  featuredArticles: Article[];
}

export function Sidebar({ featuredArticles }: SidebarProps) {
  // Get one featured article for the author profile

  return (
    <div className="space-y-8">
      {/* Author Profile Widget */}
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-serif font-bold text-lg mb-4">From the Editor</h3>
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src={"https://media-hosting.imagekit.io/cdb5d900c9884c06/Snapchat-14363457641.jpg?Expires=1840638697&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yP9YpdWhuY7km6cnsBjZnmymUZJlqoWM~X45KRYxC21slHezmkDh~UWkxEqa7YSq5k87qSroigDZOrXeaHYmNwF3JdG0OE6K-TPmNBWS53yXLgjFt4wkRNqqwi7LcLA9RgQ2s51fGKUpexwwG45RBCLIDq4DC2qh7vc1rEvI2us1mXl1zk5etn2Ha7cUkbc0gTsd9g9WiAhvwyTr8PVNPHnDxS6SxAowIVu0IhnMwmKsi0bgfw5u-SygXmFRaLDmFYU1bz1BY4rBei10hsl7fGg6Qmdx7QTUNQKwHvnx4wIJuBDoUG0SJZAp81kMQZKJYAemqpCSB9hTv3ZSEiR5Nw__"}
              alt={"Aryan"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium">{"Aryan"}</h4>
            <p className="text-sm text-muted-foreground">Editor-in-Chief</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Bringing you heartfelt stories celebrating the strength, wisdom, and love of mothers everywhere.
        </p>
        <Link href="#" className="text-sm text-primary hover:underline">
          Read more about our mission
        </Link>
      </div>

      {/* Featured Content Section */}
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-serif font-bold text-lg mb-4">Editor's Picks</h3>
        <div className="space-y-4">
          {featuredArticles.slice(0, 3).map((article, index) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.id}`}
              className={cn(
                "block group",
                index !== featuredArticles.slice(0, 3).length - 1 && "pb-4 border-b"
              )}
            >
              <div className="flex items-start">
                <div className="relative rounded overflow-hidden w-16 h-16 flex-shrink-0">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {article.readingTime} min read
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="rounded-lg border bg-card p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10" />
        <div className="relative">
          <h3 className="font-serif font-bold text-lg mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get our latest stories and insights delivered to your inbox.
          </p>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-sm rounded-md border"
            />
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md text-sm transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}