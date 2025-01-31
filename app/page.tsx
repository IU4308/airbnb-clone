
import Hero from "./ui/Hero";
import { Suspense } from 'react';
import Pagination from "./ui/Pagination";
import { fetchRentsPages } from "./lib/data";
import HeroSkeleton from "./ui/skeletons/HeroSkeleton";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchRentsPages(query);
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Suspense key={query + currentPage} fallback={<HeroSkeleton />}>
        <Hero query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages!} />
    </main>
  );
}
