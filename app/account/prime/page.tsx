import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AccountPrimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Prime Membership</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold mr-3">Prime</div>
              <h2 className="text-2xl font-bold">Join Prime Today</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">FREE One-Day & Two-Day Delivery</h3>
                  <p className="text-sm text-gray-600">On millions of eligible items</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">Prime Video</h3>
                  <p className="text-sm text-gray-600">Watch thousands of movies and TV shows</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">Prime Music</h3>
                  <p className="text-sm text-gray-600">Ad-free music streaming</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">Prime Reading</h3>
                  <p className="text-sm text-gray-600">Access to books, magazines, and more</p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <p className="text-2xl font-bold mb-2">₹1,499/year</p>
              <p className="text-sm text-gray-600 mb-4">or ₹179/month</p>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded">
                Start your Prime membership
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Current Membership</h3>
              <p className="text-gray-600 mb-4">You are not currently a Prime member</p>
              <button className="text-blue-600 hover:underline">Learn more about Prime</button>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Prime Student</h3>
              <p className="text-gray-600 mb-4">Get 50% off Prime for students</p>
              <p className="text-sm text-gray-500 mb-4">Valid student ID required</p>
              <button className="text-blue-600 hover:underline">Check eligibility</button>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Gift Prime</h3>
              <p className="text-gray-600 mb-4">Give the gift of Prime to someone special</p>
              <button className="text-blue-600 hover:underline">Gift a Prime membership</button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Prime?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold mb-2">Fast, FREE Delivery</h3>
              <p className="text-sm text-gray-600">Get your items delivered quickly with free shipping</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📺</span>
              </div>
              <h3 className="font-semibold mb-2">Prime Video</h3>
              <p className="text-sm text-gray-600">Stream award-winning Prime Originals and more</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="font-semibold mb-2">Prime Music</h3>
              <p className="text-sm text-gray-600">Enjoy ad-free music and exclusive content</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
