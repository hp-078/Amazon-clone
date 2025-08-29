import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/orders" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Your Orders</h2>
            <p className="text-gray-600">Track, return, or buy things again</p>
          </Link>
          
          <Link href="/account/security" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Login & security</h2>
            <p className="text-gray-600">Edit login, name, and mobile number</p>
          </Link>
          
          <Link href="/account/prime" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Prime</h2>
            <p className="text-gray-600">View benefits and payment settings</p>
          </Link>
          
          <Link href="/account/addresses" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Your Addresses</h2>
            <p className="text-gray-600">Edit addresses for orders and gifts</p>
          </Link>
          
          <Link href="/account/payment" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Payment options</h2>
            <p className="text-gray-600">Edit or add payment methods</p>
          </Link>
          
          <Link href="/account/content" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Digital content and devices</h2>
            <p className="text-gray-600">Manage apps, content and devices</p>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
