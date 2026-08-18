import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ProductToolbar = ({ productCount, sortBy, onSortChange }) => {
  return (
    <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3 sm:p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="font-black text-sm sm:text-base text-zinc-900 uppercase tracking-tight">
          {productCount} PRODUCTS
        </span>
        <span className="text-xs text-zinc-400 font-semibold">FOUND</span>
      </div>

      <div className="flex items-center gap-2.5 self-end sm:self-auto">
        <label
          htmlFor="sort-select"
          className="text-xs font-black text-zinc-500 uppercase tracking-wider whitespace-nowrap"
        >
          SORT BY
        </label>
        <div className="relative">
          <select
            id="sort-select"
            className="appearance-none bg-white border border-zinc-300 rounded-md text-xs font-extrabold text-zinc-900 py-2 pl-3 pr-8 focus:outline-none focus:border-zinc-900 cursor-pointer shadow-sm"
            value={sortBy}
            onChange={(event) => {
              onSortChange(event.target.value);
            }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
          <FaChevronDown className="w-3 h-3 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default ProductToolbar;
