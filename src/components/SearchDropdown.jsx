import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productService';

const SearchDropdown = ({ searchValue, setSearchValue }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadAllproducts = async () => {
      const allproducts = await getAllProducts();
      setProducts(allproducts);
    };

    loadAllproducts();
  }, []);

  const filteredResults = products.filter((product) => {
    return product.title
      .toLowerCase()
      .includes(searchValue.trim().toLowerCase());
  });

  return (
    <div className="absolute top-full left-0 mt-3 w-[500px] max-w-[calc(100vw-2rem)] bg-[#0a0a0a] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
        <h3 className="text-xs font-extrabold text-zinc-300 uppercase tracking-widest">
          RESULTS FOR "{searchValue}"
        </h3>

        <span className="text-xs font-bold text-zinc-500">
          {filteredResults.length} RESULTS
        </span>
      </div>

      {/* Products */}
      <div className="max-h-[330px] overflow-y-auto">
        {filteredResults.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-center gap-4 px-5 py-3.5 border-b border-zinc-800 hover:bg-zinc-900 transition-colors"
            onClick={() => {
              setSearchValue('');
            }}
          >
            {/* Image */}
            <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-zinc-100 truncate mt-0.5">
                {product.title}
              </h4>

              <p className="text-sm font-extrabold text-zinc-300 mt-1">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Category */}
            <span className="flex-shrink-0 text-[10px] font-extrabold text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-md uppercase tracking-wide">
              {product.category}
            </span>
          </Link>
        ))}
      </div>

      {/* View all */}
      <Link
        to={`/shop?search=${searchValue}`}
        className="w-full flex items-center justify-center gap-2 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-[#c6f432] text-xs font-extrabold uppercase tracking-widest transition-colors"
        onClick={() => {
          setSearchValue('');
        }}
      >
        VIEW ALL RESULTS
        <FaArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};

export default SearchDropdown;
