'use client';

import Image from "next/image";
import Link from "next/link";
import { Globe, IndianRupee } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      {/* Back to Top */}
      <div 
        className="bg-[#232f3e] text-white h-10 flex items-center justify-center cursor-pointer hover:bg-[#485769] transition-colors"
        onClick={scrollToTop}
      >
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
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Amazon
                  </Link>
                </li>
                <li>
                  <Link href="/investor-relations" className="hover:underline">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="/amazon-devices" className="hover:underline">
                    Amazon Devices
                  </Link>
                </li>
                <li>
                  <Link href="/science" className="hover:underline">
                    Amazon Science
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sell" className="hover:underline">
                    Sell products on Amazon
                  </Link>
                </li>
                <li>
                  <Link href="/sell-apps" className="hover:underline">
                    Sell on Amazon Business
                  </Link>
                </li>
                <li>
                  <Link href="/associates" className="hover:underline">
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link href="/advertising" className="hover:underline">
                    Advertise Your Products
                  </Link>
                </li>
                <li>
                  <Link href="/publishing" className="hover:underline">
                    Self-Publish with Us
                  </Link>
                </li>
                <li>
                  <Link href="/hub" className="hover:underline">
                    Host an Amazon Hub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Amazon Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/business-card" className="hover:underline">
                    Amazon Business Card
                  </Link>
                </li>
                <li>
                  <Link href="/shop-with-points" className="hover:underline">
                    Shop with Points
                  </Link>
                </li>
                <li>
                  <Link href="/reload" className="hover:underline">
                    Reload Your Balance
                  </Link>
                </li>
                <li>
                  <Link href="/currency-converter" className="hover:underline">
                    Amazon Currency Converter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/covid" className="hover:underline">
                    Amazon and COVID-19
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="hover:underline">
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="hover:underline">
                    Your Orders
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:underline">
                    Shipping Rates & Policies
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:underline">
                    Returns & Replacements
                  </Link>
                </li>
                <li>
                  <Link href="/manage-content" className="hover:underline">
                    Manage Your Content and Devices
                  </Link>
                </li>
                <li>
                  <Link href="/assistant" className="hover:underline">
                    Amazon Assistant
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:underline">
                    Help
                  </Link>
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
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
              alt="Amazon Logo"
              className="h-8 w-auto object-contain"
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
  );
}
