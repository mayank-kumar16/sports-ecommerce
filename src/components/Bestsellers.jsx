import React from 'react';
import ProductCard from './ProductCard';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Bestsellers = ({ products }) => {
  const bestSellerProducts = [...products]
    .sort((a, b) => {
      return b.reviews.length - a.reviews.length;
    })
    .slice(0, 8);

  if (products.length === 0) {
    return <p>no product found</p>;
  }
  return (
    <section className="py-16 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-1 bg-[#c6f432] rounded-full"></span>
              <span className="text-xs font-black tracking-widest text-zinc-500 uppercase">
                MOST POPULAR
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase">
              BEST SELLERS
            </h2>
            <p className="text-sm text-zinc-600 mt-1 font-medium">
              Top-rated sports gear chosen by players and international
              athletes.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-900 text-zinc-900 hover:text-[#c6f432] font-bold text-xs sm:text-sm px-5 py-3 rounded-md transition-all self-start sm:self-auto border border-zinc-200"
          >
            VIEW ALL PRODUCTS
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
