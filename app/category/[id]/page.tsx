'use client';

import { useParams } from 'next/navigation';
import { getProductsByCategory, categories } from '@/lib/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  
  const category = categories.find(cat => cat.id === categoryId);
  const products = getProductsByCategory(category?.name || '');

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <nav className="text-sm text-gray-600 mb-4">
          <span>Categories</span> › <span>{category.name}</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
          <p className="text-gray-600">
            {products.length} product{products.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Filter and Sort Options */}
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <select className="border rounded px-3 py-2 text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Reviews</option>
            <option>Newest</option>
          </select>
          
          <div className="flex gap-2 text-sm">
            <span className="text-gray-600">Brand:</span>
            {/* You could add brand filters here */}
          </div>
        </div>

        {/* Subcategories */}
        {category.subcategories.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Browse by subcategory</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.subcategories.map((subcategory) => (
                <div
                  key={subcategory}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                  <span className="text-sm font-medium">{subcategory}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-lg font-medium mb-2">No products found</h2>
            <p className="text-gray-600">
              Check back later for new products in this category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
