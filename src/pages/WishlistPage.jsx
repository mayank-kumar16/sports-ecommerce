import { Link } from 'react-router-dom';
import {
  FaTrashAlt,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaCheckCircle,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { clearWishlist, removeFromWishlist } from '../redux/wishlistSlice';

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => {
    return state.wishlist.wishlistItems;
  });

  const dispatch = useDispatch();

  return (
    <div className="bg-[#f8f9fa] text-zinc-900 min-h-screen font-sans selection:bg-[#c6f432] selection:text-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between font-mono">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wider group"
          >
            <FaArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#0a0a0a]" />
            CONTINUE SHOPPING
          </Link>

          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            {wishlistItems.length}{' '}
            {wishlistItems.length === 1 ? 'ITEM' : 'ITEMS'} IN WISHLIST
          </span>
        </div>

        {/* Page Title */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight uppercase font-mono">
            MY WISHLIST
          </h1>

          {wishlistItems.length > 0 && (
            <button
              type="button"
              onClick={() => {
                dispatch(clearWishlist());
              }}
              className="text-xs font-mono font-bold text-red-600 hover:text-red-700 uppercase tracking-wider px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
            >
              CLEAR WISHLIST
            </button>
          )}
        </div>

        {/* EMPTY WISHLIST STATE */}
        {wishlistItems.length === 0 ? (
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-10 sm:p-14 text-center shadow-sm max-w-xl mx-auto my-8 font-mono space-y-5">
            <div className="w-20 h-20 bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center mx-auto text-zinc-400">
              <FaHeart className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-black text-zinc-500 uppercase tracking-widest bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-md">
                YOUR WISHLIST IS EMPTY
              </span>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mt-3">
                NO SAVED PRODUCTS YET
              </h2>
              <p className="text-xs text-zinc-500 font-sans max-w-md mx-auto mt-2 leading-relaxed">
                Save your favorite sports equipment here to quickly access and
                add them to your cart whenever you are ready.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0a0a0a] hover:bg-[#c6f432] text-white hover:text-black font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all duration-200 shadow-md group"
              >
                EXPLORE SHOP
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ) : (
          /* HORIZONTAL LIST LAYOUT MATCHING USER SCREENSHOT */
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-zinc-200/80 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:border-zinc-300"
              >
                {/* Left Thumbnail & Details */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Image Container */}
                  <Link
                    to={`/product/${item.id}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-zinc-50 border border-zinc-200 overflow-hidden flex-shrink-0 flex items-center justify-center p-2 group"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Title & Info */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-zinc-700 bg-zinc-100 border border-zinc-200/80 px-2 py-0.5 rounded uppercase tracking-wider font-mono inline-block">
                      {item.category}
                    </span>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-zinc-900 leading-tight hover:text-black transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-zinc-400 font-mono font-bold uppercase tracking-wider">
                      SKU: {item.sku}
                    </p>
                  </div>
                </div>

                {/* Right Side: Price + ADD TO CART Button + Trash Icon */}
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-100">
                  {/* Pricing */}
                  <div className="text-right font-mono">
                    <span className="text-lg sm:text-xl font-black text-zinc-900 block leading-none">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* ADD TO CART Button */}
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(addToCart({ product: item, quantity: 1 }));
                    }}
                    className="px-5 py-2.5 sm:py-3 bg-[#0a0a0a] hover:bg-[#c6f432] text-white hover:text-black font-extrabold text-xs font-mono rounded-xl uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center"
                  >
                    ADD TO CART
                  </button>

                  {/* Remove Trash Icon Button */}
                  <button
                    type="button"
                    aria-label={`Remove ${item.name} from wishlist`}
                    className="p-2 text-zinc-400 hover:text-zinc-800 transition-colors focus:outline-none ml-1"
                    onClick={() => {
                      dispatch(removeFromWishlist(item.id));
                    }}
                  >
                    <FaTrashAlt className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
