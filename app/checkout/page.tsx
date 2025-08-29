import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="bg-white rounded-lg p-8 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="text-4xl text-green-500">✓</div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
          <p className="text-gray-600 mb-6">
            This is a demo checkout page. In a real application, this would process your payment and create an order.
          </p>
          
          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Order confirmation would be sent to your email</li>
                <li>• Items would be prepared for shipping</li>
                <li>• You would receive tracking information</li>
                <li>• Delivery would be scheduled</li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <Link href="/" className="flex-1">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded">
                  Continue Shopping
                </button>
              </Link>
              <Link href="/orders" className="flex-1">
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded">
                  View Orders
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
