import React, { useState } from 'react';

// --- DUMMY DATA ---
// In a real application, this would come from an API
const dealsData = [
  {
    id: 1,
    name: 'Men\'s Graphic Print T-Shirt',
    brand: 'Nike',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    originalPrice: 2999,
    salePrice: 1499,
    rating: 4.5,
    reviews: 120,
    isDealOfTheDay: true,
  },
  {
    id: 2,
    name: 'Women\'s High-Waist Skinny Jeans',
    brand: 'Levi\'s',
    imageUrl: 'https://images.unsplash.com/photo-1604176354204-926873782855?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    originalPrice: 4599,
    salePrice: 2299,
    rating: 4.8,
    reviews: 250,
    isDealOfTheDay: false,
  },
  {
    id: 3,
    name: 'Classic Suede Sneakers',
    brand: 'Puma',
    imageUrl: 'https://images.unsplash.com/photo-1608231387042-8a816b61062a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    originalPrice: 6999,
    salePrice: 3499,
    rating: 4.6,
    reviews: 180,
    isDealOfTheDay: false,
  },
  {
    id: 4,
    name: 'Floral Print Midi Dress',
    brand: 'Zara',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    originalPrice: 3990,
    salePrice: 2190,
    rating: 4.3,
    reviews: 95,
    isDealOfTheDay: true,
  },
   {
    id: 5,
    name: 'Men\'s Running Shoes',
    brand: 'Adidas',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    originalPrice: 8999,
    salePrice: 5399,
    rating: 4.9,
    reviews: 310,
    isDealOfTheDay: false,
  },
  {
    id: 6,
    name: 'Oversized Cotton Hoodie',
    brand: 'H&M',
    imageUrl: 'https://images.unsplash.com/photo-1556821854-585d38a8d115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80',
    originalPrice: 2499,
    salePrice: 1749,
    rating: 4.2,
    reviews: 78,
    isDealOfTheDay: false,
  },
  {
    id: 7,
    name: 'Slim Fit Formal Shirt',
    brand: 'Allen Solly',
    imageUrl: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    originalPrice: 2199,
    salePrice: 1099,
    rating: 4.7,
    reviews: 155,
    isDealOfTheDay: true,
  },
  {
    id: 8,
    name: 'Leather Monogram Belt',
    brand: 'Gucci',
    imageUrl: 'https://images.unsplash.com/photo-1621832049142-03fe10118839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    originalPrice: 35000,
    salePrice: 28000,
    rating: 5.0,
    reviews: 45,
    isDealOfTheDay: false,
  },
];

const comingSoonData = [
    {
        id: 9,
        name: 'Limited Edition Winter Jacket',
        brand: 'Nike x Supreme',
        imageUrl: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        releaseDate: 'Nov 15, 2025'
    },
    {
        id: 10,
        name: 'Eco-Friendly Bamboo Watch',
        brand: 'EcoWear',
        imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
        releaseDate: 'Dec 01, 2025'
    },
    {
        id: 11,
        name: 'Smart Fabric Athleisure Pants',
        brand: 'Adidas Future',
        imageUrl: 'https://images.unsplash.com/photo-1548906280-f6d58153e345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        releaseDate: 'Jan 20, 2026'
    }
];

// --- SVG ICONS (used in buttons for better performance) ---

const StarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ShoppingCartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const BellIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
);

const CheckIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6 9 17l-5-5"></path>
    </svg>
);


// --- PRODUCT CARD COMPONENT ---

const ProductCard = ({ product }) => {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative border border-gray-200/80 flex flex-col">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {discountPercentage}% OFF
        </span>
        {product.isDealOfTheDay && (
          <span className="ml-2 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
            Deal of the Day
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="overflow-hidden relative h-64">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2 h-7">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
             {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-gray-600 text-sm ml-2">({product.reviews} reviews)</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-2xl font-bold text-gray-900">
            ₹{product.salePrice.toLocaleString('en-IN')}
          </p>
          <p className="text-md text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-gray-200 flex gap-2">
          <button className="flex-1 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2">
            <ShoppingCartIcon className="w-5 h-5"/>
            Add to Cart
          </button>
          <button className="p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-all duration-300">
            <HeartIcon className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMING SOON CARD COMPONENT ---

const ComingSoonCard = ({ product }) => {
    const [notified, setNotified] = useState(false);

    const handleNotifyClick = () => {
        setNotified(true);
        // In a real app, you would also send this preference to a server
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl relative border border-gray-200/80 flex flex-col">
            <div className="overflow-hidden relative h-80">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Releasing on</p>
                    <p className="text-xl font-bold">{product.releaseDate}</p>
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                 <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                 <h3 className="text-lg font-semibold text-gray-800 truncate h-7">{product.name}</h3>
                 <div className="mt-auto pt-4">
                     <button 
                        onClick={handleNotifyClick}
                        disabled={notified}
                        className={`w-full font-semibold py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 ${
                            notified 
                            ? 'bg-green-500 text-white cursor-not-allowed' 
                            : 'bg-gray-800 text-white hover:bg-gray-900'
                        }`}
                    >
                        {notified ? (
                            <> <CheckIcon className="w-5 h-5"/> Notified </>
                        ) : (
                            <> <BellIcon className="w-5 h-5"/> Notify Me </>
                        )}
                     </button>
                 </div>
            </div>
        </div>
    );
};


// --- MAIN DEALS COMPONENT ---

export default function Deals() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Today's Top Deals
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Don't miss out on these limited-time offers. Grab them before they're gone!
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {dealsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-16 md:mt-24">
             <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Launching Soon
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
                    Be the first to know about our exclusive upcoming products.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {comingSoonData.length > 0 ? (
                     comingSoonData.map((product) => (
                        <ComingSoonCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full text-center">No upcoming products at the moment.</p>
                )}
            </div>
        </div>

      </div>
    </div>
  );
}

