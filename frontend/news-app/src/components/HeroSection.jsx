import { useEffect, useState } from "react";
import { fetchLatest } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loader from "../libs/loader";
import EmptyState from "../libs/EmptyState";

export default function HeroSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchLatest()
      .then((res) => {
        console.log(res);
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }
  if (articles.length === 0) {
    return <EmptyState message="No data available" />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
}
