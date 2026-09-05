import { FaStar, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    tags,
    price,
    discountPercentage,
    rating,
    reviews,
    thumbnail,
  } = product;

  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);
  const reviewsCount = reviews.length;
  const sportCategory = tags[1];

  const dispatch = useDispatch();

  return (
    <div className="group relative bg-white border border-zinc-200 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-zinc-300">
      <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden flex items-center justify-center p-4">
        {discountPercentage > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[11px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase">
            -{discountPercentage}%
          </span>
        )}

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-zinc-600 hover:text-red-500 hover:bg-white transition-all shadow-sm focus:outline-none"
          onClick={() => {
            dispatch(addToWishlist(product));
          }}
        >
          <FaRegHeart className="w-4 h-4" />
        </button>

        <img
          src={thumbnail}
          alt={`${title}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <div className="absolute inset-x-0 bottom-0 bg-black/70  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <Link
            to={`/product/${id}`}
            className="block text-[11px] font-bold text-[#c6f432] tracking-wider uppercase w-full py-2 px-3"
          >
            View
          </Link>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">
            <span className="text-[9px] text-m-[10px] text-zinc-400 bg-zinc-100 px-1 py-0.5 rounded">
              {sportCategory}
            </span>
          </div>

          <h3 className="font-bold text-zinc-900 text-sm line-clamp-1 group-hover:text-black transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-1.5 my-2">
            <div className="flex items-center text-amber-400">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <FaStar
                      key={star}
                      className={`w-2.5 h-2.5 w-m-3.5 h-m-3.5 ${
                        star <= Math.round(rating)
                          ? 'text-amber-400'
                          : 'text-zinc-300'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
            <span className="text-xs font-semibold text-zinc-500">
              {rating} ({reviewsCount})
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-100 flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-[14px] text-m-[16px] text-zinc-900">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-xs text-zinc-400 line-through font-medium">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            aria-label={`Add ${title} to cart`}
            className="p-2.5 bg-zinc-900 hover:bg-[#c6f432] hover:text-black text-white rounded-md transition-all duration-200 focus:outline-none"
            onClick={() => {
              dispatch(addToCart({ product, quantity: 1 }));
            }}
          >
            <FaShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
