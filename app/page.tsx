import Image from "next/image"
import { Search, MapPin, ShoppingCart, Menu, Globe, IndianRupee } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header>
        {/* Main Navigation */}
        <div className="bg-[#131921] text-white h-[60px] flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center justify-center h-[50px] w-[130px] hover:border hover:border-white hover:rounded cursor-pointer p-2">
            <Image
              src="/placeholder.svg?height=40&width=100"
              alt="Amazon Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Delivery Address */}
          <div className="hidden md:flex flex-col hover:border hover:border-white hover:rounded cursor-pointer p-2">
            <span className="text-[#cccccc] text-xs">Deliver to</span>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm font-bold">India</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[620px] mx-4">
            <div className="flex h-10 rounded">
              <select className="bg-[#f2f2f2] text-black px-2 rounded-l border-none text-sm">
                <option>All</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon"
                className="flex-1 px-4 text-black border-none outline-none"
              />
              <div className="bg-[#febd69] px-4 flex items-center justify-center rounded-r cursor-pointer">
                <Search className="w-5 h-5 text-[#131921]" />
              </div>
            </div>
          </div>

          {/* Sign In */}
          <div className="hidden md:flex flex-col hover:border hover:border-white hover:rounded cursor-pointer p-2">
            <span className="text-xs">Hello, sign in</span>
            <span className="text-sm font-bold">Account & Lists</span>
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:flex flex-col hover:border hover:border-white hover:rounded cursor-pointer p-2">
            <span className="text-xs">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </div>

          {/* Cart */}
          <div className="flex items-center hover:border hover:border-white hover:rounded cursor-pointer p-2">
            <ShoppingCart className="w-6 h-6 mr-1" />
            <span className="text-sm font-bold">Cart</span>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="bg-[#232f3e] text-white h-[39px] flex items-center px-4">
          <div className="flex items-center hover:border hover:border-white hover:rounded cursor-pointer p-1 mr-4">
            <Menu className="w-4 h-4 mr-2" />
            <span className="text-sm">All</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 flex-1">
            <span className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">
              Today's Deals
            </span>
            <span className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">
              Customer Service
            </span>
            <span className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">Registry</span>
            <span className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">Gift Cards</span>
            <span className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">Sell</span>
          </div>

          <div className="hidden lg:block">
            <span className="text-sm font-bold">Shop deals in Electronics</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="h-[300px] bg-cover bg-center flex items-end justify-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=300&width=1200')",
        }}
      >
        <div className="bg-white text-black h-10 w-[95%] flex items-center justify-center text-sm mb-5 rounded">
          <p>
            You are on amazon.com You can also Shop on Amazon India for millions of products with fast local delivery.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here to go to amazon.in
            </a>
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-gradient-to-b from-[#fffbe1] to-[#b1c9cb] py-6">
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {[
            { title: "Clothes", image: "/placeholder.svg?height=300&width=300" },
            { title: "Health & Personal Care", image: "/placeholder.svg?height=300&width=300" },
            { title: "Furniture", image: "/placeholder.svg?height=300&width=300" },
            { title: "Electronics", image: "/placeholder.svg?height=300&width=300" },
            { title: "Beauty Picks", image: "/placeholder.svg?height=300&width=300" },
            { title: "Toys", image: "/placeholder.svg?height=300&width=300" },
            { title: "Crafts", image: "/placeholder.svg?height=300&width=300" },
            { title: "Fashion", image: "/placeholder.svg?height=300&width=300" },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-[#d3d3d3] w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] h-[375px] rounded p-5 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold text-[#131921] mb-4">{category.title}</h2>
              <div
                className="h-[300px] bg-cover bg-center rounded mb-4"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <p className="text-blue-600 text-sm hover:underline">See more</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        {/* Back to Top */}
        <div className="bg-[#232f3e] text-white h-10 flex items-center justify-center cursor-pointer hover:bg-[#485769]">
          <span className="text-sm">Back to top</span>
        </div>

        {/* Footer Links */}
        <div className="bg-[#131921] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Get to Know Us</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About Amazon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Amazon Devices
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Make Money with Us</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Sell products on Amazon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sell on Amazon Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sell apps on Amazon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Become an Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Advertise Your Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Self-Publish with Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Host an Amazon Hub
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Amazon Payment Products</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Amazon Business Card
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Shop with Points
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Reload Your Balance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Amazon Currency Converter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Let Us Help You</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Amazon and COVID-19
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Your Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Your Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Shipping Rates & Policies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Returns & Replacements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Manage Your Content and Devices
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Amazon Assistant
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#131921] text-white py-6 border-t border-[#3a4553]">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=100"
                alt="Amazon Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 hover:border hover:border-white hover:rounded cursor-pointer p-2">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </div>
              <div className="flex items-center gap-2 hover:border hover:border-white hover:rounded cursor-pointer p-2">
                <IndianRupee className="w-4 h-4" />
                <span>INR - Indian Rupee</span>
              </div>
              <div className="flex items-center gap-2 hover:border hover:border-white hover:rounded cursor-pointer p-2">
                <div className="w-4 h-3 bg-gradient-to-b from-orange-500 via-white to-green-500 rounded-sm"></div>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
