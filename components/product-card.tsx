'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useNotifications } from "@/lib/notification-context";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const { state, dispatch } = useCart();
  const { dispatch: notifyDispatch } = useNotifications();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
    notifyDispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        message: `${product.title} added to cart!`,
        type: 'success'
      }
    });
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

  if (variant === 'compact') {
    return (
      <Link href={`/product/${product.id}`} className="block">
        <div className="bg-white rounded-lg border hover:shadow-lg transition-shadow p-4">
          <div className="aspect-square relative mb-3">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <h3 className="font-medium text-sm line-clamp-2 mb-2">{product.title}</h3>
          <div className="flex items-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-600">({product.reviewCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg border hover:shadow-lg transition-shadow overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
          {product.originalPrice && (
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}
          {product.primeEligible && (
            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
              Prime
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-lg line-clamp-2 mb-2">{product.title}</h3>
          
          <div className="flex items-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-600 ml-1">
              {product.rating} ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-xl text-red-600">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.freeShipping && (
            <p className="text-sm text-green-600 mb-2">FREE Shipping</p>
          )}

          <div className="flex gap-2">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
