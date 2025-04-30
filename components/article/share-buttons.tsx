"use client";

import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  articleTitle: string;
  articleUrl: string;
}

export function ShareButtons({ articleTitle, articleUrl }: ShareButtonsProps) {
  const encodedTitle = encodeURIComponent(articleTitle);
  const encodedUrl = encodeURIComponent(articleUrl);
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://x.com/Aryan_Mittal11`,
    linkedin: `https://www.linkedin.com/in/mittal-aryan/`
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl).then(() => {
      toast.success("Link copied to clipboard");
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      
      <a 
        href={shareLinks.facebook} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Facebook className="h-4 w-4" />
        </Button>
      </a>
      
      <a 
        href={shareLinks.twitter} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Twitter className="h-4 w-4" />
        </Button>
      </a>
      
      <a 
        href={shareLinks.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Linkedin className="h-4 w-4" />
        </Button>
      </a>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-full" 
        onClick={copyToClipboard}
        aria-label="Copy link to clipboard"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}