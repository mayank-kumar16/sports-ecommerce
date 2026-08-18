import React from 'react';
import { FaFilter } from 'react-icons/fa';

const ShopFilters = ({
  categories,
  selectedCategory,
  onSetCategory,
  maxPrice,
  onSetmaxPrice,
}) => {
  return (
    <aside className="w-full lg:w-64 shrink-0 bg-white border border-zinc-200 rounded-lg p-5 shadow-sm sticky top-24">
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-zinc-200">
          <FaFilter className="w-3.5 h-3.5 text-zinc-900" />
          <h2 className="font-extrabold text-sm tracking-wider text-zinc-900 uppercase">
            FILTERS
          </h2>
        </div>
        <div>
          <h3 className="text-xs font-black tracking-wider text-zinc-900 uppercase mb-3">
            CATEGORY
          </h3>
          <div className="space-y-1">
            <button
              type="button"
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all group ${
                selectedCategory === 'all'
                  ? 'bg-zinc-900 text-white font-bold shadow-sm'
                  : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
              onClick={() => {
                onSetCategory('all');
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedCategory === 'all'
                      ? 'border-[#c6f432] bg-[#c6f432]'
                      : 'border-zinc-300 group-hover:border-zinc-400 bg-white'
                  }`}
                >
                  {selectedCategory === 'all' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  )}
                </span>
                <span>All</span>
              </div>
            </button>

            {categories.map((category) => {
              const isSelected = selectedCategory === category.tag;
              return (
                <button
                  type="button"
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all group ${
                    isSelected
                      ? 'bg-zinc-900 text-white font-bold shadow-sm'
                      : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                  onClick={() => {
                    onSetCategory(category.tag);
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-[#c6f432] bg-[#c6f432]'
                          : 'border-zinc-300 group-hover:border-zinc-400 bg-white'
                      }`}
                    >
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                      )}
                    </span>
                    <span>{category.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <hr className="border-zinc-200" />

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-black tracking-wider text-zinc-900 uppercase">
              PRICE RANGE
            </h3>
            <span className="text-xs font-bold text-zinc-900">
              Up to ${maxPrice.toFixed(2)}
            </span>
          </div>

          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="40"
              step="1"
              value={maxPrice}
              className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900"
              onChange={(event) => {
                onSetmaxPrice(Number(event.target.value));
              }}
            />

            <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400">
              <span>$0</span>
              <span>$40.00</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="bg-zinc-100 border border-zinc-200 rounded p-2 text-center">
                <span className="text-[10px] text-zinc-400 block uppercase font-bold">
                  Min
                </span>
                <span className="text-xs font-extrabold text-zinc-900">$0</span>
              </div>
              <div className="bg-zinc-100 border border-zinc-200 rounded p-2 text-center">
                <span className="text-[10px] text-zinc-400 block uppercase font-bold">
                  Max
                </span>
                <span className="text-xs font-extrabold text-zinc-900">
                  ${maxPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ShopFilters;
