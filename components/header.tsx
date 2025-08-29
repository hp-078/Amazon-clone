'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ShoppingCart, Menu, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { state } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header>
      {/* Main Navigation */}
      <div className="bg-[#131921] text-white h-[60px] flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center h-[50px] w-[130px] hover:border hover:border-white hover:rounded cursor-pointer p-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
            alt="Amazon Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Delivery Address */}
        <div className="hidden md:flex flex-col hover:border hover:border-white hover:rounded cursor-pointer p-2">
          <span className="text-[#cccccc] text-xs">Deliver to</span>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm font-bold">India</span>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-[620px] mx-4">
          <div className="flex h-10 rounded">
            <select className="bg-[#f2f2f2] text-black px-2 rounded-l border-none text-sm outline-none">
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Books</option>
              <option>Toys & Games</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 text-black border-none outline-none"
            />
            <button
              type="submit"
              className="bg-[#febd69] px-4 flex items-center justify-center rounded-r cursor-pointer hover:bg-[#f3a847] transition-colors"
            >
              <Search className="w-5 h-5 text-[#131921]" />
            </button>
          </div>
        </form>

        {/* Sign In */}
        <Link href="/account" className="hidden md:flex flex-col hover:border hover:border-white hover:rounded cursor-pointer p-2">
          <span className="text-xs">Hello, sign in</span>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm font-bold">Account & Lists</span>
          </div>
        </Link>

        {/* Returns & Orders */}
        <Link href="/orders" className="hidden md:flex flex-col hover:border hover:border-white hover:rounded cursor-pointer p-2">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </Link>

        {/* Cart */}
        <Link href="/cart" className="flex items-center hover:border hover:border-white hover:rounded cursor-pointer p-2 relative">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 mr-1" />
            {state.itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ff9900] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {state.itemCount > 99 ? '99+' : state.itemCount}
              </span>
            )}
          </div>
          <span className="text-sm font-bold">Cart</span>
        </Link>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-[#232f3e] text-white h-[39px] flex items-center px-4">
        <div className="flex items-center hover:border hover:border-white hover:rounded cursor-pointer p-1 mr-4">
          <Menu className="w-4 h-4 mr-2" />
          <span className="text-sm">All</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 flex-1">
          <Link href="/deals" className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">
            Today's Deals
          </Link>
          <Link href="/customer-service" className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">
            Customer Service
          </Link>
          <Link href="/registry" className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">
            Registry
          </Link>
          <Link href="/gift-cards" className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">
            Gift Cards
          </Link>
          <Link href="/sell" className="text-sm hover:border hover:border-white hover:rounded cursor-pointer p-1">
            Sell
          </Link>
        </div>

        <div className="hidden lg:block">
          <span className="text-sm font-bold">Shop deals in Electronics</span>
        </div>
      </div>
    </header>
  );
}
