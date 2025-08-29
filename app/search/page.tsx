'use client';

import { useSearchParams } from 'next/navigation';
import { searchProducts } from '@/lib/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = searchProducts(query);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-medium">
            {query ? `Results for "${query}"` : 'Search Results'}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            {results.length} result{results.length !== 1 ? 's' : ''}
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-lg font-medium mb-2">No results found</h2>
            <p className="text-gray-600">
              Try checking your spelling or using more general terms
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
