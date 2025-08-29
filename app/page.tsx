import Image from "next/image";
import Link from "next/link";
import { categories, products, getProductsByCategory } from "@/lib/data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";

export default function HomePage() {
  const featuredProducts = products.slice(0, 8);
  const electronicsProducts = getProductsByCategory('Electronics').slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div
        className="h-[400px] bg-cover bg-center flex items-end justify-center relative"
        style={{
          backgroundImage: "url('https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/af_pc_2x._CB792409181_.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="bg-white/95 text-black h-12 w-[95%] flex items-center justify-center text-sm mb-8 rounded shadow-lg relative z-10">
          <p>
            You are on amazon.com You can also Shop on Amazon India for millions of products with fast local delivery.{" "}
            <Link href="https://www.amazon.in" className="text-blue-600 hover:underline">
              Click here to go to amazon.in
            </Link>
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square relative mb-3 overflow-hidden rounded">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-medium text-center">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Electronics Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Electronics</h2>
            <Link href="/category/electronics" className="text-blue-600 hover:underline">
              See all Electronics →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {electronicsProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="compact" />
            ))}
          </div>
        </div>
      </div>

      {/* Today's Deals Banner */}
      <div className="bg-gradient-to-r from-orange-400 to-red-500 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Today's Deals</h2>
          <p className="text-lg mb-6">Save big on top products across all categories</p>
          <Link href="/deals">
            <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
