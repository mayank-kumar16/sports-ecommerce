import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoaderProductDetails from '../components/LoaderProductDetails';
import { getProductById } from '../services/productService';
import ErrorProducts from '../components/ErrorProducts';

import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaShoppingBag,
  FaArrowLeft,
  FaCheck,
  FaTruck,
  FaShieldAlt,
  FaSyncAlt,
} from 'react-icons/fa';

import ProductGallerySwiper from '../components/ProductGallerySwiper';
import ProductInfoAccordion from '../components/ProductInfoAccordion';
import Newsletter from '../components/Newsletter';
import YouMayAlsoLikeSection from '../components/YouMayAlsoLikeSection';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [currentProduct, setcurrentProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentProd = async () => {
      setLoading(true);
      try {
        const currentProd = await getProductById(id);
        setcurrentProduct(currentProd);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentProd();
  }, [id]);

  if (loading) {
    return <LoaderProductDetails />;
  }

  if (error) {
    return <ErrorProducts />;
  }

  if (currentProduct === null) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-[#f8f9fa] text-zinc-900 min-h-screen font-sans selection:bg-[#c6f432] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wider group"
          >
            <FaArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#0a0a0a]" />
            BACK TO SHOP
          </Link>
        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-6">
            <ProductGallerySwiper images={currentProduct.images} />
          </div>

          <div className="lg:col-span-6 font-mono space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-zinc-900 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-md tracking-widest uppercase">
                {currentProduct.category}
              </span>

              <span className="text-[11px] text-zinc-400 font-bold">
                SKU: {currentProduct.sku}
              </span>
            </div>

            <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight leading-tight uppercase">
              {currentProduct.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center text-amber-400 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(currentProduct.rating)
                        ? 'text-amber-400'
                        : 'text-zinc-200'
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs font-bold text-zinc-600">
                {currentProduct.rating} ({currentProduct.reviews.length}{' '}
                reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-4 py-4 px-5 bg-zinc-50 border border-zinc-200 rounded-2xl">
              <span className="text-3xl sm:text-4xl font-black text-zinc-900">
                ${currentProduct.price}
              </span>

              <span className="text-lg text-zinc-400 line-through font-semibold">
                $
                {(
                  currentProduct.price /
                  (1 - currentProduct.discountPercentage / 100)
                ).toFixed(2)}
              </span>

              <span className="bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-md tracking-wider uppercase ml-auto">
                SAVE {currentProduct.discountPercentage}%
              </span>
            </div>

            <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed">
              {currentProduct.description}
            </p>

            <div className="h-px bg-zinc-100 w-full"></div>

            <div className="flex items-center justify-between text-xs text-zinc-600 font-bold">
              <span>
                STATUS:{' '}
                <span className="text-emerald-600 font-extrabold uppercase">
                  {currentProduct.availabilityStatus}
                </span>{' '}
                ({currentProduct.stock} in stock)
              </span>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-black text-zinc-700 uppercase tracking-wider">
                QUANTITY
              </label>

              <div className="inline-flex items-center border border-zinc-300 bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  className="w-11 h-11 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 transition-colors font-extrabold text-lg focus:outline-none"
                  aria-label="Decrease quantity"
                >
                  -
                </button>

                <span className="w-14 text-center text-base font-black text-zinc-900 font-mono">
                  1
                </span>

                <button
                  type="button"
                  className="w-11 h-11 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 transition-colors font-extrabold text-lg focus:outline-none"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                className="w-full bg-[#0a0a0a] hover:bg-[#c6f432] text-white hover:text-black font-extrabold text-sm sm:text-base py-4 rounded-xl uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-3 group"
              >
                <FaShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                ADD TO CART
              </button>

              <button
                type="button"
                className="w-full border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-900 hover:bg-zinc-50 font-bold text-sm py-3.5 rounded-xl uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <FaRegHeart className="w-4 h-4 text-zinc-600" />
                <span>ADD TO WISHLIST</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-100 text-[11px] font-sans text-zinc-600 font-bold">
              <div className="flex flex-col items-center justify-center text-center p-2.5 bg-zinc-50 rounded-lg">
                <FaTruck className="w-4 h-4 text-zinc-900 mb-1" />
                <span>{currentProduct.shippingInformation}</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center p-2.5 bg-zinc-50 rounded-lg">
                <FaShieldAlt className="w-4 h-4 text-zinc-900 mb-1" />
                <span>{currentProduct.warrantyInformation}</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center p-2.5 bg-zinc-50 rounded-lg">
                <FaSyncAlt className="w-4 h-4 text-zinc-900 mb-1" />
                <span>{currentProduct.returnPolicy}</span>
              </div>
            </div>
          </div>
        </div>

        <ProductInfoAccordion product={currentProduct} />

        <YouMayAlsoLikeSection currentProductId={currentProduct.id} />
      </div>

      <Newsletter />
    </div>
  );
};

export default ProductDetailsPage;
