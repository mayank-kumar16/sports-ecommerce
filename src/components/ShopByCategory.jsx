import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../utils/category';

const ShopByCategory = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-1 bg-[#c6f432] rounded-full"></span>
              <span className="text-xs font-black tracking-widest text-zinc-400 uppercase">
                SPORTS CATEGORIES
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
              SHOP BY CATEGORY
            </h2>
            <p className="text-sm text-zinc-400 mt-1 font-medium">
              Explore pro-grade equipment across all major sporting disciplines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
