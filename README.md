<<<<<<< HEAD
# Amazon Clone - Complete Prototype

A comprehensive Amazon clone built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. This is a complete e-commerce prototype without a database, using mock data for demonstration purposes.

## 🚀 Features

### Core Features
- **Homepage** with hero section, categories, and featured products
- **Product Catalog** with detailed product pages
- **Search Functionality** with results page
- **Shopping Cart** with add/remove/update functionality
- **Category Pages** for browsing products by category
- **Responsive Design** works on all screen sizes

### Pages Included
- **Home Page** (`/`) - Main landing page with categories and featured products
- **Product Details** (`/product/[id]`) - Individual product pages with full details
- **Search Results** (`/search`) - Product search functionality
- **Shopping Cart** (`/cart`) - Cart management with quantity controls
- **Category Pages** (`/category/[id]`) - Browse products by category
- **Account Pages** (`/account`) - User account management
- **Orders Page** (`/orders`) - Order history (placeholder)
- **Deals Page** (`/deals`) - Special offers and deals

### Components
- **Header** - Navigation with search, cart counter, and user menu
- **Footer** - Links and company information
- **Product Card** - Reusable product display component
- **Cart Context** - Global state management for shopping cart

### Mock Data
- **8 Sample Products** across different categories
- **6 Product Categories** (Electronics, Fashion, Home & Kitchen, Books, Toys, Health)
- **Complete Product Information** (images, prices, reviews, features)
- **Shopping Cart State Management**

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui components
- **State Management**: React Context API
- **Icons**: Lucide React
- **Image Handling**: Next.js Image optimization

## 📦 Project Structure

```
amazon-clone/
├── app/                        # Next.js App Router pages
│   ├── account/               # Account management pages
│   ├── cart/                  # Shopping cart page
│   ├── category/[id]/         # Category browsing pages
│   ├── deals/                 # Deals and offers page
│   ├── orders/                # Orders history page
│   ├── product/[id]/          # Individual product pages
│   ├── search/                # Search results page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with providers
│   ├── loading.tsx            # Loading UI
│   └── page.tsx               # Homepage
├── components/                 # Reusable React components
│   ├── ui/                    # shadcn/ui components
│   ├── footer.tsx             # Site footer
│   ├── header.tsx             # Site header with navigation
│   └── product-card.tsx       # Product display component
├── lib/                       # Utilities and data
│   ├── cart-context.tsx       # Shopping cart state management
│   ├── data.ts                # Mock product and category data
│   └── utils.ts               # Utility functions
└── public/                    # Static assets
    ├── placeholder.jpg        # Sample images
    └── placeholder-logo.svg   # Logo placeholder
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd amazon-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features Demonstration

### Homepage
- Hero banner with promotional content
- Category grid for easy navigation
- Featured products showcase
- Electronics section with top products
- Today's deals banner

### Product Pages
- High-quality product images with gallery
- Detailed product information and features
- Customer ratings and reviews count
- Add to cart functionality with quantity selection
- Related product suggestions
- Price comparisons with original pricing

### Shopping Cart
- Add/remove products
- Update quantities
- Real-time total calculations
- Tax calculations
- Responsive design for mobile and desktop
- Clear cart functionality

### Search & Navigation
- Global search functionality
- Category-based browsing
- Filter and sort options
- Breadcrumb navigation
- Mobile-responsive navigation menu

## 🎨 Design Features

### Amazon-like UI/UX
- **Color Scheme**: Amazon's signature orange (#FF9900) and blue (#131921)
- **Typography**: Clean, readable fonts
- **Layout**: Card-based design with proper spacing
- **Icons**: Consistent iconography using Lucide React
- **Hover Effects**: Interactive elements with smooth transitions

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Collapsible navigation for mobile
- Touch-friendly interface elements
- Optimized images for different screen sizes

## 🔧 Customization

### Adding New Products
Edit `lib/data.ts` to add new products to the `products` array:

```typescript
{
  id: "unique-id",
  title: "Product Name",
  price: 2999, // Price in paise (₹29.99)
  originalPrice: 3999,
  rating: 4.5,
  reviewCount: 1234,
  images: ["image-url"],
  description: "Product description",
  features: ["Feature 1", "Feature 2"],
  category: "Category Name",
  brand: "Brand Name",
  inStock: true,
  freeShipping: true,
  primeEligible: true
}
```

### Adding New Categories
Add categories to the `categories` array in `lib/data.ts`:

```typescript
{
  id: "category-id",
  name: "Category Name",
  image: "category-image-url",
  subcategories: ["Sub 1", "Sub 2"]
}
```

### Styling Customization
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Component styles can be modified in individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Other Platforms
The app can be deployed to any platform that supports Next.js applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is for educational purposes only. Amazon is a trademark of Amazon.com, Inc.

## 🎯 Learning Objectives

This project demonstrates:
- **Next.js App Router** usage with TypeScript
- **React Context** for state management
- **Responsive design** with Tailwind CSS
- **Component composition** and reusability
- **Mock data management** without a database
- **E-commerce functionality** implementation
- **Modern React patterns** and best practices

## 🔮 Future Enhancements

Potential improvements for learning:
- User authentication and login
- Wishlist functionality
- Product reviews and ratings system
- Order tracking and management
- Payment integration (Stripe/PayPal)
- Database integration (MongoDB/PostgreSQL)
- Search filters and advanced sorting
- Product recommendations
- Admin dashboard
- Email notifications

## 📞 Support

For questions or issues:
1. Check the documentation
2. Review the code comments
3. Create an issue in the repository

---

**Built with ❤️ for learning modern web development**
=======
# Amazon-clone
Amazon Clone Project 
>>>>>>> 99ed824e05c10fd127e2dae10186f4598333de88
