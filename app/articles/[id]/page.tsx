import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { ArticleDetail } from "@/components/article/article-detail";

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === params.id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail initialArticle={article} />;
}