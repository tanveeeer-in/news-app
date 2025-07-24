import { useState, useEffect } from "react";
import { searchNews } from "../utils/api";
import debounce from "lodash.debounce";
import { Search } from "lucide-react";

export default function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = debounce(async (q) => {
    if (q.length > 2) {
      const res = await searchNews(q);
      setResults(res.data);
    } else {
      setResults([]);
    }
  }, 300);

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search news articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
      />
    </div>
  );
}
