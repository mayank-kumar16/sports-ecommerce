import ShopHeader from '../components/ShopHeader';
import ShopFilters from '../components/ShopFilters';
import ProductToolbar from '../components/ProductToolbar';
import ProductCard from '../components/ProductCard';
import LoaderProductList from '../components/LoaderProductList';
import ErrorProducts from '../components/ErrorProducts';
import { getAllProducts } from '../services/productService';
import { categories } from '../utils/category';
import Newsletter from '../components/Newsletter';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';

  const [maxPrice, setMaxPrice] = useState(40);
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const loadAllproducts = async () => {
      setLoading(true);

      try {
        const allproducts = await getAllProducts();
        setProducts(allproducts);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadAllproducts();
  }, []);

  const onSetCategory = (currentCat) => {
    if (currentCat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: currentCat });
    }
  };

  const onSetmaxPrice = (price) => {
    setMaxPrice(price);
  };

  const filteredProducts = products.filter((product) => {
    let matchedProduct = false;

    if (selectedCategory === 'all') {
      matchedProduct = true;
    } else if (product.tags.includes(selectedCategory)) {
      matchedProduct = true;
    }

    const priceMatch = product.price <= maxPrice;

    const searchMatch = product.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    return matchedProduct && priceMatch && searchMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    }

    if (sortBy === 'price-high') {
      return b.price - a.price;
    }

    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }

    return 0;
  });

  const onSortChange = (sortVal) => {
    setSortBy(sortVal);
  };

  if (loading) {
    return <LoaderProductList />;
  }

  if (error) {
    return <ErrorProducts />;
  }

  return (
    <div className="bg-white min-h-screen">
      <ShopHeader />

      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8 items-start">
            <div className="hidden lg:block">
              <ShopFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onSetCategory={onSetCategory}
                maxPrice={maxPrice}
                onSetmaxPrice={onSetmaxPrice}
              />
            </div>

            <main className="flex-1 min-w-0">
              <div className="lg:hidden flex items-center gap-3 mb-5">
                <button
                  type="button"
                  onClick={() => {
                    setShowMobileFilters(true);
                  }}
                  className="flex-1 h-11 border border-zinc-200 rounded-lg bg-white text-zinc-900 text-sm font-extrabold uppercase tracking-wide"
                >
                  Filters
                </button>

                <select
                  value={sortBy}
                  onChange={(event) => {
                    onSortChange(event.target.value);
                  }}
                  className="flex-1 h-11 border border-zinc-200 rounded-lg bg-white px-3 text-sm font-bold text-zinc-900 outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              <div className="hidden lg:block">
                <ProductToolbar
                  productCount={sortedProducts.length}
                  sortBy={sortBy}
                  onSortChange={onSortChange}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {sortedProducts.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-16 bg-zinc-50 rounded-lg border border-dashed border-zinc-300">
                  <h3 className="font-extrabold text-zinc-900 text-lg uppercase tracking-tight">
                    No products match your criteria
                  </h3>

                  <p className="text-xs text-zinc-500 font-medium mt-1">
                    Try adjusting your category selection or increasing your
                    price limit.
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => {
              setShowMobileFilters(false);
            }}
            className="absolute inset-0 w-full h-full bg-black/40 cursor-default"
          ></button>

          <div className="absolute left-0 right-0 bottom-0 max-h-[90vh] overflow-y-auto bg-white rounded-t-2xl p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-extrabold uppercase tracking-wide text-zinc-900">
                Filters
              </h2>

              <button
                type="button"
                onClick={() => {
                  setShowMobileFilters(false);
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-700 text-xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="relative">
              <ShopFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onSetCategory={onSetCategory}
                maxPrice={maxPrice}
                onSetmaxPrice={onSetmaxPrice}
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setShowMobileFilters(false);
              }}
              className="w-full mt-5 bg-zinc-900 text-white py-3 rounded-lg font-extrabold uppercase tracking-wide"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      <Newsletter />
    </div>
  );
};

export default ShopPage;
