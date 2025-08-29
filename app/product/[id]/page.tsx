'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { getProductById, formatPrice } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const { dispatch } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const handleBuyNow = () => {
    // Add to cart first
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    // Redirect to checkout
    window.location.href = '/checkout';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-400/50 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <nav className="text-sm text-gray-600 mb-4">
          <span>Electronics</span> › <span>{product.category}</span> › <span>{product.brand}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-white rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                      selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-medium mb-2">{product.title}</h1>
              <p className="text-blue-600 hover:underline cursor-pointer">Visit the {product.brand} Store</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                {product.rating} out of 5 stars
              </span>
              <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                {product.reviewCount.toLocaleString()} reviews
              </span>
            </div>

            <div className="border-t border-b py-4">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-600">Price:</span>
                <span className="text-2xl font-medium text-red-600">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-sm text-red-600">
                      ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                    </span>
                  </>
                )}
              </div>
              
              {product.freeShipping && (
                <div className="flex items-center gap-2 mt-2 text-sm text-blue-600">
                  <Truck className="w-4 h-4" />
                  <span>FREE Shipping</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">About this item</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-medium mb-4">Product Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border">
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-medium text-red-600">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {product.freeShipping && (
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <Truck className="w-4 h-4" />
                    <span>FREE Shipping</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-green-600">
                  <span className="font-medium">In Stock</span>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantity:</label>
                  <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10)].map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button
                    onClick={handleBuyNow}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3"
                  >
                    Buy Now
                  </Button>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Secure transaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-blue-600" />
                    <span>Return policy</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to List
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
