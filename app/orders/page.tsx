import Header from '@/components/header';
import Footer from '@/components/footer';

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
        
        <div className="bg-white rounded-lg p-8 text-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="text-4xl text-gray-400">📦</div>
          </div>
          <h2 className="text-xl font-bold mb-4">No orders yet</h2>
          <p className="text-gray-600 mb-6">
            When you place an order, you'll see it here along with tracking and delivery information.
          </p>
          <a
            href="/"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded"
          >
            Start shopping
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
