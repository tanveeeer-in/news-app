import { useEffect, useState } from "react";
import { fetchAll } from "../utils/api";
import Loader from "../libs/loader";
import EmptyState from "../libs/EmptyState";
import CarouselCard from "./CarouselCard";

export default function CarouselSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchAll()
      .then((res) => {
        console.log(res.data);
        setArticles(res.data.slice(10));
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
    return <EmptyState message="No More data available" />;
  }

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2 space-x-4 flex">
      {articles.map((article, index) => (
        <CarouselCard key={index} article={article} />
      ))}
    </div>
  );
}
