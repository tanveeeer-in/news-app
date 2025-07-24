import { useState } from "react";
import HeroSection from "./components/HeroSection";
import CarouselSection from "./components/CarouselSection";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="text-2xl font-bold text-blue-700">News App</h1>

          <div className="w-full sm:w-1/2">
            <SearchBar setResults={setResults} />
          </div>
        </div>
      </header>

      <main className="max-w-screen-lg mx-auto px-4 py-6">
        <SearchResults results={results} />

        {!results.length && (
          <>
            <section className="mt-10 animate-fadeIn">
              <h2 className="text-xl font-semibold text-muted-foreground mb-4">
                Latest Headlines
              </h2>
              <HeroSection />
            </section>

            <section className="mt-10 animate-fadeIn">
              <h2 className="text-xl font-semibold text-muted-foreground mb-4">
                More Stories
              </h2>
              <CarouselSection />
            </section>
          </>
        )}
      </main>
    </div>
  );
}
