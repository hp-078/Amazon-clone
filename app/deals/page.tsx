import Header from '@/components/header';
import Footer from '@/components/footer';
import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';

export default function DealsPage() {
  // Show products with the highest discounts first
  const dealsProducts = products
    .filter(product => product.originalPrice && product.originalPrice > product.price)
    .sort((a, b) => {
      const discountA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const discountB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return discountB - discountA;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Today's Deals</h1>
          <p className="text-gray-600">
            Save big on these limited-time offers. New deals added daily.
          </p>
        </div>

        {/* Deal Categories */}
        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
              All Deals
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50">
              Electronics
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50">
              Fashion
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50">
              Home & Kitchen
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50">
              Books
            </button>
          </div>
        </div>

        {/* Featured Deal */}
        <div className="mb-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Deal of the Day</h2>
            <p className="text-lg mb-4">
              Save up to 50% on electronics. Limited time offer ending soon!
            </p>
            <button className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dealsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* More deals placeholder */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">More amazing deals coming soon!</p>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            Load More Deals
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
