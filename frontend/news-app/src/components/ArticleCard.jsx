import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

export default function ArticleCard({ article }) {
  const formattedDate = format(new Date(article.publishedAt), "PPP p"); // Example: Jul 23, 2025 at 8:00 AM

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col gap-3">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-gray-900 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {article.description}
        </p>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
        <span>{formattedDate}</span>
        <span className="italic">{article.source?.name}</span>
      </div>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm font-medium mt-1 hover:underline inline-flex items-center gap-1"
      >
        Read more <ArrowRight size={16} />
      </a>
    </div>
  );
}
