import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Gift Lists & Registry</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Create a Registry</h2>
              <p className="text-gray-600 mb-6">Create gift lists for any occasion</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-2">Wedding Registry</h3>
                  <p className="text-sm text-gray-600">Start your life together</p>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-2">Baby Registry</h3>
                  <p className="text-sm text-gray-600">Prepare for your little one</p>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-2">Birthday List</h3>
                  <p className="text-sm text-gray-600">Celebrate another year</p>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-2">Wish List</h3>
                  <p className="text-sm text-gray-600">Save items for later</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Find a Registry</h2>
              <p className="text-gray-600 mb-4">Search for a friend's or family member's registry</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">City or ZIP Code</label>
                  <input
                    type="text"
                    placeholder="City or ZIP"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded">
                  Search Registry
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Registry Benefits</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Free shipping on registry items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Easy returns and exchanges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Track what's been purchased</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Share with friends and family</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Get help with creating and managing your registry</p>
              <button className="text-blue-600 hover:underline text-sm">Registry Help & FAQ</button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
