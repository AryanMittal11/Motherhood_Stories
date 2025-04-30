export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: string;
  category: string;
  readingTime: number;
  imageUrl: string;
  featured?: boolean;
}

export type Category = 'Stories' | 'Health' | 'Inspiration' | 'All';