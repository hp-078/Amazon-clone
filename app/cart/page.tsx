'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const proceedToBuy = () => {
    window.location.href = '/checkout';
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-2xl font-medium mb-4">Your Amazon Cart is empty</h1>
            <p className="text-gray-600 mb-6">Check your saved for later items below or continue shopping.</p>
            <Link href="/">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-medium">Shopping Cart</h1>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  Clear Cart
                </Button>
              </div>

              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b last:border-b-0">
                    <div className="flex-shrink-0 w-32 h-32 relative">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <Link 
                        href={`/product/${item.id}`}
                        className="font-medium hover:text-blue-600 line-clamp-2"
                      >
                        {item.title}
                      </Link>
                      
                      <div className="text-sm text-gray-600">
                        <p>Brand: {item.brand}</p>
                        {item.inStock ? (
                          <p className="text-green-600 font-medium">In Stock</p>
                        ) : (
                          <p className="text-red-600 font-medium">Out of Stock</p>
                        )}
                        {item.primeEligible && (
                          <p className="text-blue-600">Prime Eligible</p>
                        )}
                      </div>

                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-2">
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <Button
                          onClick={() => removeItem(item.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </Button>

                        <Button variant="ghost" size="sm">
                          Save for later
                        </Button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-lg">{formatPrice(item.price * item.quantity)}</p>
                      {item.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">
                          {formatPrice(item.originalPrice * item.quantity)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Items ({state.itemCount}):</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping & handling:</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Total before tax:</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated tax:</span>
                  <span>{formatPrice(Math.round(state.total * 0.18))}</span>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-lg font-bold text-red-600">
                  <span>Order total:</span>
                  <span>{formatPrice(state.total + Math.round(state.total * 0.18))}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button 
                  onClick={proceedToBuy}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3"
                >
                  Proceed to Buy ({state.itemCount} item{state.itemCount !== 1 ? 's' : ''})
                </Button>
                
                <div className="text-xs text-center text-gray-600">
                  By placing your order, you agree to Amazon's privacy notice and conditions of use.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-medium mb-2">Customers who bought items in your cart also bought</h3>
              <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                View recommendations
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
