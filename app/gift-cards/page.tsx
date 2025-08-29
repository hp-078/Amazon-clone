import Header from '@/components/header';
import Footer from '@/components/footer';

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Gift Cards</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Amazon Gift Cards</h2>
            <p className="text-gray-600 mb-6">Give the gift of choice with Amazon Gift Cards</p>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2">Email Gift Card</h3>
                <p className="text-sm text-gray-600">Send instantly via email</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2">Print at Home</h3>
                <p className="text-sm text-gray-600">Print and give in person</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2">Physical Gift Card</h3>
                <p className="text-sm text-gray-600">Shipped to recipient</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Check Gift Card Balance</h2>
            <p className="text-gray-600 mb-6">Enter your gift card code to check balance</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Gift Card Code</label>
                <input
                  type="text"
                  placeholder="Enter your gift card code"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                Check Balance
              </button>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Redeem Gift Card</h3>
              <p className="text-sm text-gray-600 mb-4">Add a gift card to your account</p>
              <button className="text-blue-600 hover:underline">Redeem a Gift Card</button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Popular Gift Card Designs</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Birthday', 'Congratulations', 'Thank You', 'Holiday'].map((design) => (
              <div key={design} className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold">{design}</span>
                </div>
                <p className="text-sm font-medium">{design}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
