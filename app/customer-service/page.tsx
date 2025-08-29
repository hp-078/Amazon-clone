import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Customer Service</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4">Track your package</h2>
            <p className="text-gray-600 mb-4">Find a package that was shipped to you</p>
            <button className="text-blue-600 hover:underline">Track package</button>
          </div>
          
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4">Return an item</h2>
            <p className="text-gray-600 mb-4">Get help with returns and refunds</p>
            <button className="text-blue-600 hover:underline">Start a return</button>
          </div>
          
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4">Cancel an order</h2>
            <p className="text-gray-600 mb-4">Cancel items or orders</p>
            <button className="text-blue-600 hover:underline">Cancel order</button>
          </div>
          
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4">Digital services and device support</h2>
            <p className="text-gray-600 mb-4">Get help with your Amazon devices</p>
            <button className="text-blue-600 hover:underline">Get device help</button>
          </div>
          
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4">Account settings</h2>
            <p className="text-gray-600 mb-4">Change your account information</p>
            <button className="text-blue-600 hover:underline">Update settings</button>
          </div>
          
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4">Contact us</h2>
            <p className="text-gray-600 mb-4">Get help from our customer service team</p>
            <button className="text-blue-600 hover:underline">Contact support</button>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How do I track my order?</h3>
              <p className="text-gray-600">You can track your order by going to "Your Orders" and clicking on the tracking information.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What is your return policy?</h3>
              <p className="text-gray-600">Most items can be returned within 30 days of delivery. Some restrictions may apply.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">How do I cancel my order?</h3>
              <p className="text-gray-600">You can cancel your order before it ships by going to "Your Orders" and selecting "Cancel items".</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
