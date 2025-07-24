import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

export default function CarouselCard({ article }) {
  const formattedDate = format(new Date(article.publishedAt), "MMM d, yyyy");

  return (
    <div className="min-w-[300px] max-w-[320px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500">{formattedDate}</p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium mt-1 hover:underline inline-flex items-center gap-1"
        >
          Read more <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
