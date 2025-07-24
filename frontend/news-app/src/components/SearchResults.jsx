import ArticleCard from "./ArticleCard";

export default function SearchResults({ results }) {
  if (!results.length) return null;
  return (
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 animate-fadeIn">
      {results.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
}
