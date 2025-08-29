// Mock data for the Amazon clone prototype
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  features: string[];
  category: string;
  brand: string;
  inStock: boolean;
  freeShipping: boolean;
  primeEligible: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: string[];
}

// Mock product data
export const products: Product[] = [
  {
    id: "1",
    title: "TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
    price: 4999,
    originalPrice: Math.round(4999 / (1 - 0.55)),
    rating: 4.0,
    reviewCount: 1945,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/51NOjinGjrL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51%2BAGYLfveL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51xvX18fJAL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/615zlpg1EKL._SX679_.jpg"
    ],
    description: "Dual Band WiFi router with Gigabit ports, MU-MIMO technology, and Qualcomm chipset for ultimate range and performance.",
    features: [
      "Dual Band WiFi speed —— Simultaneous 2.4GHz 300 Mbps and 5GHz 867 Mbps connections",
      "Ultimate Range Wi-Fi —— 4 external antennas and one internal antenna provide stable wireless connections",
      "Qualcomm Chipset —— High-Performance Chipset provides an excellent connection experience",
      "MU-MIMO —— MU-MIMO achieves 2X efficiency by communicating with up to 2 devices at once",
      "Gigabit Ports —— With one Gigabit WAN port and four Gigabit LAN ports"
    ],
    category: "Electronics",
    brand: "TP Link",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "2",
    title: "Apple MacBook Pro",
    price: 117900,
    originalPrice: Math.round(117900 / (1 - 0.11)),
    rating: 5.0,
    reviewCount: 4156,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71Ztc9lofJL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81mq%2BcwSDwL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71EVEyqBwJL._SX679_.jpg"
    ],
    description: "Eighth-generation quad-core Intel Core i5 processor with Brilliant Retina display and Touch Bar.",
    features: [
      "Eighth-generation quad-core Intel Core i5 processor",
      "Brilliant Retina display with True Tone technology",
      "Backlit Magic Keyboard",
      "Touch Bar and Touch ID",
      "Intel Iris Plus Graphics 645",
      "Ultra-fast SSD",
      "Two Thunderbolt 3 (USB-C) ports"
    ],
    category: "Electronics",
    brand: "Apple",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "3",
    title: "Voltas 1.4 Ton 5 Star Inverter Adjustable Split AC",
    price: 68990,
    originalPrice: Math.round(68990 / (1 - 0.49)),
    rating: 3.0,
    reviewCount: 8143,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71XKkmpD2FL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/813iYIldZLL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71CIopvPlPL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61eEIsK3cPL._SX679_.jpg"
    ],
    description: "Adjustable Split AC with inverter compressor and 2 adjustable modes for different cooling needs.",
    features: [
      "Adjustable Split AC with inverter compressor",
      "Capacity: 1.4 ton. Suitable for medium sized rooms (111 to 150 sq ft)",
      "Energy Rating: 5 Star | Best in class efficiency",
      "Copper Condenser Coil: Better cooling and performance",
      "2-Mode Adjustable cooling (1 Ton & 1.4 Ton)"
    ],
    category: "Home & Kitchen",
    brand: "Voltas",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "4",
    title: "IFB 17 L Solo Microwave Oven",
    price: 6190,
    originalPrice: Math.round(6190 / (1 - 0.18)),
    rating: 4.0,
    reviewCount: 7930,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81hN9SfFWEL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71WDneSY%2BTL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71guEj9hUDL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71dN-i5-79L._SX679_.jpg"
    ],
    description: "17L Capacity Solo microwave oven suitable for bachelors and small families with 3 auto cook menus.",
    features: [
      "17L Capacity: Suitable for bachelors & small families",
      "Solo: Can be used for reheating, defrosting and cooking",
      "Control: jog Dials that are easy to use with a long life",
      "Special features: 3 auto cook menu options",
      "Warranty: 1 year on product and 3 years on magnetron and cavity"
    ],
    category: "Home & Kitchen",
    brand: "IFB",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "5",
    title: "Samsung Galaxy M31s",
    price: 22999,
    originalPrice: Math.round(22999 / (1 - 0.15)),
    rating: 4.0,
    reviewCount: 4192,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61MMMHnfxEL._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61Cl1ytOA9L._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61OavvFAYqL._SY879_.jpg"
    ],
    description: "Quad camera setup with 64MP main camera, 6.5-inch super AMOLED display, and 6000mAH battery.",
    features: [
      "Quad camera setup - 64MP main + 12MP ultra wide + 5MP depth + 5MP macro",
      "6.5-inch super AMOLED Infinity-O display, FHD+",
      "6GB RAM, 128GB internal memory expandable up to 512GB",
      "Android v10.0 with Exynos 9611 octa core processor",
      "6000mAH lithium-ion battery with 25W Type-C fast charger"
    ],
    category: "Electronics",
    brand: "Samsung",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "6",
    title: "Mi TV 4A PRO 108 cm",
    price: 25990,
    originalPrice: Math.round(25990 / (1 - 0.04)),
    rating: 4.0,
    reviewCount: 7471,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71934SolopL._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71sR3Lui0QL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81rONKWm24L._SX679_.jpg"
    ],
    description: "Full HD LED Smart TV with Android TV 9.0, Built-in Wi-Fi, and 20W DTS-HD sound output.",
    features: [
      "Resolution: Full HD (1920x1080) | Refresh Rate: 60 hertz",
      "Connectivity: 3 HDMI ports and 3 USB ports",
      "Sound: 20 Watts Output | DTS-HD sound",
      "Smart TV Features: Built-In Wi-Fi | PatchWall | Netflix | Prime Video",
      "Android TV 9.0 | Google Assistant | Data Saver"
    ],
    category: "Electronics",
    brand: "MI",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "7",
    title: "Sony HT-S20R 5.1ch Dolby Digital Soundbar Home Theatre System",
    price: 19990,
    originalPrice: Math.round(19990 / (1 - 0.25)),
    rating: 3.0,
    reviewCount: 3756,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71%2Bs6K1eovL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/716Oew8ULNL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61xdnSRoGJL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71-pq-88U0L._SX679_.jpg"
    ],
    description: "5.1 channel Soundbar with Bluetooth connectivity and USB audio playback for immersive home theatre experience.",
    features: [
      "5.1 channel Soundbar",
      "Bluetooth connectivity for wireless audio streaming",
      "USB Audio Playback",
      "Dolby Digital sound processing",
      "Easy setup and installation"
    ],
    category: "Electronics",
    brand: "Sony",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "8",
    title: "Canon EOS M50 24.1MP Mirrorless Camera",
    price: 61785,
    originalPrice: Math.round(61785 / (1 - 0.09)),
    rating: 4.0,
    reviewCount: 2121,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/813SEryW1SL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81j0d8pNBFL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81fdRep8ucL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81xIqFQjUYL._SX679_.jpg"
    ],
    description: "24.1MP APS-C CMOS sensor mirrorless camera with DIGIC 8 processor and 4K video recording capability.",
    features: [
      "APS-C CMOS sensor with 24.1 MP high resolution",
      "ISO: 100-25600 sensitivity range",
      "DIGIC 8 with 143 autofocus points",
      "4K video with fully manual control",
      "Perfect for shooting 4K UHD video and sequential burst mode"
    ],
    category: "Electronics",
    brand: "Canon",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "9",
    title: "TP-Link LB110 Wi-Fi SmartLight 10W",
    price: 2999,
    originalPrice: Math.round(2999 / (1 - 0.14)),
    rating: 4.0,
    reviewCount: 8594,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/21UWhFAM0uL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51UFif-KbPL._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61DkhFWUW9L._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81wcm%2B51XJL._SX679_.jpg"
    ],
    description: "Wi-Fi Smart Light with remote control, dimming capability, and voice control compatibility with Alexa.",
    features: [
      "Manage Remotely – Control lights from anywhere with Kasa app",
      "Dimmable Light – Adjust brightness to suit your mood",
      "Voice Control – Compatible with Amazon Alexa",
      "Monitor Power – Track real-time energy usage",
      "Save Energy – Reduce energy use up to 80%",
      "No Hub Required – Connect directly to Wi-Fi"
    ],
    category: "Electronics",
    brand: "TP Link",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "10",
    title: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine",
    price: 16800,
    originalPrice: Math.round(16800 / (1 - 0.14)),
    rating: 4.0,
    reviewCount: 9508,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/613b9IdBr0L._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71bJ8Zn8zFL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71tlart4XFL._SX679_.jpg"
    ],
    description: "6.5 kg fully-automatic top load washing machine with 6 wash programs and Centre Jet Technology.",
    features: [
      "Capacity 6.5 Kg: Suitable for families with 3 to 4 members",
      "RPM 680: Higher spin speeds helps in faster drying",
      "6 Wash Programs: Normal, Quick wash, Delicates, Soak + Normal",
      "Centre Jet Technology for powerful washing",
      "Diamond Drum for gentle fabric care"
    ],
    category: "Home & Kitchen",
    brand: "Samsung",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "11",
    title: "Samsung 253L 3 Star Inverter Frost Free Double Door Refrigerator",
    price: 28990,
    originalPrice: Math.round(28990 / (1 - 0.19)),
    rating: 4.0,
    reviewCount: 8463,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71WdrLib1GL._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81ckXJGNRpL._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61ysDeam3aL._SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81DPGNfFv4L._SY879_.jpg"
    ],
    description: "253 liters frost free double door refrigerator with digital inverter compressor and 3 star energy rating.",
    features: [
      "Frost Free, Double Door: auto defrost to stop ice-build up",
      "Capacity 253 liters: suitable for families with 2 to 3 members",
      "Energy rating 3 Star: high Energy Efficiency",
      "Digital Inverter Compressor: quieter operation and uses less power",
      "Stabilizer free operation | Coolpack & coolwall"
    ],
    category: "Home & Kitchen",
    brand: "Samsung",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "12",
    title: "LG 108 cm (43 inches) Full HD LED Smart TV",
    price: 40990,
    originalPrice: Math.round(40990 / (1 - 0.27)),
    rating: 4.0,
    reviewCount: 903,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/7173oa2fxXL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61QY6jFVXqL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71qklg0Uz8L._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71vLUzEOkTL._SX679_.jpg"
    ],
    description: "43 inches Full HD LED Smart TV with WebOS, unlimited OTT app support, and Active HDR.",
    features: [
      "Resolution: Full HD (1920 x 1080) | Refresh Rate: 50 hertz",
      "Connectivity: 2 HDMI ports and 1 USB port",
      "Sound: 20 Watts Output | DTS Virtual:X | Clear Voice III",
      "Smart TV Features: WebOS Smart TV, Unlimited OTT App Support",
      "Display: Active HDR | Slim LED BackLight Module"
    ],
    category: "Electronics",
    brand: "LG",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "13",
    title: "Amazon Brand - Symbol Men's Regular Fit Polo Shirt",
    price: 399,
    originalPrice: Math.round(399 / (1 - 0.02)),
    rating: 3.0,
    reviewCount: 6018,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81VZO6P3jpL._UY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/816ZaMDW7PL._UY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/91s0jmcnQuL._UY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71s4fURW5gL._UY879_.jpg"
    ],
    description: "Regular fit men's polo shirt made from 60% Polyester and 40% Cotton blend with Nehru collar.",
    features: [
      "60% Polyester and 40% Cotton",
      "Regular fit",
      "Half sleeve",
      "Nehru/Mandarin collar",
      "Hand wash only",
      "Color: Bossa Nova"
    ],
    category: "Fashion",
    brand: "Amazon",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "14",
    title: "Puma Unisex-Adult Sneakers Running Shoe",
    price: 3599,
    originalPrice: Math.round(3599 / (1 - 0.23)),
    rating: 4.0,
    reviewCount: 4043,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71IiyEyPv6L._UY695_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81q27RyrHAL._UY695_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71WzLbefwfL._UY695_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/614vys3jRxL._UY695_.jpg"
    ],
    description: "Unisex adult sneakers with EVA sole, speed laces, and SoftFoam+ comfort technology.",
    features: [
      "Sole: EVA",
      "Closure: Speed Laces",
      "Style Name: ST Activate SoftFoam+ Sneakers",
      "Upper Material: Mesh",
      "Lower Material: EVA",
      "90 Days Manufacturers Warranty"
    ],
    category: "Fashion",
    brand: "Puma",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  },
  {
    id: "15",
    title: "Mi Smart Band 4",
    price: 2499,
    originalPrice: Math.round(2499 / (1 - 0.20)),
    rating: 4.0,
    reviewCount: 7879,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71nAt0uKDtL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71iseBmChAL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71104yyE16L._SX679_.jpg"
    ],
    description: "39.9% larger AMOLED color display with 5ATM waterproof build and 20 days battery life.",
    features: [
      "39.9% larger AMOLED color full-touch display",
      "Music control on the band",
      "5ATM waterproof build for swimming",
      "24/7 automatic heart rate monitoring",
      "Up to 20 days of battery life",
      "Sleep pattern monitoring with light and deep sleep tracking"
    ],
    category: "Electronics",
    brand: "MI",
    inStock: true,
    freeShipping: true,
    primeEligible: true
  }
];

// Categories data
export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://lh3.googleusercontent.com/d/1YdcpDmFVt0tIc_pFSnkn2XnT7H9yOjVd",
    subcategories: ["Smartphones", "Laptops", "TVs", "Cameras", "Smart Home", "Audio"]
  },
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    image: "https://lh3.googleusercontent.com/d/1RnvZu3KluFmR1s63qdtvv6L7t3sKYa_i",
    subcategories: ["Kitchen Appliances", "Home Appliances", "Refrigerators", "Washing Machines", "Air Conditioners", "Microwaves"]
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://lh3.googleusercontent.com/d/11o6LeOsTZ9o_fKLPKZy2UIbNSfDEHJMb",
    subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories", "Sportswear", "Casual Wear"]
  },
  {
    id: "mobile",
    name: "Mobile & Accessories",
    image: "https://lh3.googleusercontent.com/d/1pethRqZ_XkvNVaW0LXQYUCvAVW36NOCV",
    subcategories: ["Smartphones", "Cases & Covers", "Chargers", "Smart Bands", "Headphones", "Power Banks"]
  },
  {
    id: "computers",
    name: "Computers",
    image: "https://lh3.googleusercontent.com/d/1a-5Ylon4MjhdqGyaiJy2-CjD5Pp_edAH",
    subcategories: ["Laptops", "Desktops", "Tablets", "Accessories", "Storage", "Networking"]
  },
  {
    id: "tv-appliances",
    name: "TV & Appliances",
    image: "https://lh3.googleusercontent.com/d/1bfo1GMrvdGgaB0ApdgIaqEYjPyBS9Z_4",
    subcategories: ["Televisions", "Washing Machines", "Refrigerators", "Air Conditioners", "Kitchen Appliances", "Home Audio"]
  },
  {
    id: "books",
    name: "Books & Media",
    image: "https://lh3.googleusercontent.com/d/13YATBsVQiqHp9_bpm6d2dKWowc56QwMJ",
    subcategories: ["Fiction", "Non-Fiction", "Educational", "Comics", "E-Books", "Audio Books"]
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image: "https://lh3.googleusercontent.com/d/1MaWO0bEUeuICvl81bk7zIkQgfQrCECHb",
    subcategories: ["Fitness", "Outdoor Sports", "Indoor Games", "Sports Apparel", "Equipment", "Accessories"]
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
    image: "https://lh3.googleusercontent.com/d/1sejdoEbH7e5jJbA95Ca4Oc2pFzK_lAHm",
    subcategories: ["Personal Care", "Health Supplements", "Beauty Products", "Skincare", "Hair Care", "Wellness"]
  }
];

// Utility functions
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const searchQuery = query.toLowerCase();
  return products.filter(product =>
    product.title.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery) ||
    product.category.toLowerCase().includes(searchQuery) ||
    product.brand.toLowerCase().includes(searchQuery)
  );
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price / 100);
};
