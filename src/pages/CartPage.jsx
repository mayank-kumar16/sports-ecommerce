import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTrashAlt,
  FaArrowLeft,
  FaArrowRight,
  FaShoppingBag,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = subtotal;

  return (
    <div className="bg-[#f8f9fa] text-zinc-900 min-h-screen font-sans selection:bg-[#c6f432] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wider group"
          >
            <FaArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#0a0a0a]" />
            CONTINUE SHOPPING
          </Link>

          <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">
            {cartItems.length} ITEMS IN YOUR CART
          </span>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight uppercase font-mono">
            SHOPPING CART
          </h1>

          {cartItems.length > 0 && (
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 border border-red-200 hover:border-red-600 transition-all duration-200 shadow-sm"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              <FaTrashAlt className="w-3.5 h-3.5" />
              <span>CLEAR CART</span>
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white border border-zinc-200 rounded-3xl p-10 sm:p-16 text-center shadow-sm max-w-2xl mx-auto my-8 font-mono">
            <div className="w-24 h-24 bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center mx-auto text-zinc-400 mb-6">
              <FaShoppingBag className="w-10 h-10" />
            </div>

            <span className="text-xs font-black text-zinc-500 uppercase tracking-widest bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-md">
              YOUR CART IS CURRENTLY EMPTY
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 uppercase tracking-tight mt-4">
              NO SPORTS GEAR ADDED YET
            </h2>

            <p className="text-xs sm:text-sm text-zinc-500 font-sans max-w-md mx-auto mt-2 leading-relaxed">
              Explore our premium collection of football, cricket, badminton,
              golf, and fitness gear to gear up for your next victory.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] hover:bg-[#c6f432] text-white hover:text-black font-extrabold text-sm rounded-xl uppercase tracking-wider transition-all duration-200 shadow-md group"
              >
                EXPLORE SHOP
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:border-zinc-300 transition-all flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-zinc-50 border border-zinc-200 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="space-y-1 font-mono">
                      <span className="text-[10px] font-black text-zinc-900 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded uppercase tracking-wider">
                        {item.category}
                      </span>

                      <h3 className="font-sans text-base sm:text-lg font-extrabold text-zinc-900 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs text-zinc-400 font-bold">
                        SKU: {item.sku}
                      </p>

                      <p className="text-sm font-black text-zinc-900 pt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-100 font-mono">
                    <div className="flex flex-col items-start sm:items-center space-y-1">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        QTY
                      </span>

                      <div className="inline-flex items-center border border-zinc-300 bg-white rounded-lg overflow-hidden shadow-sm">
                        <button
                          type="button"
                          className="w-8 h-8 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 transition-colors font-bold text-sm"
                          aria-label="Decrease quantity"
                          onClick={() => {
                            dispatch(decreaseQuantity(item.id));
                          }}
                        >
                          -
                        </button>

                        <span className="w-10 text-center text-xs font-black text-zinc-900 font-mono">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          className="w-8 h-8 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 transition-colors font-bold text-sm"
                          aria-label="Increase quantity"
                          onClick={() => {
                            dispatch(increaseQuantity(item.id));
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase block tracking-wider">
                        TOTAL
                      </span>

                      <span className="text-base font-black text-zinc-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label={`Remove ${item.title} from cart`}
                      className="p-2.5 rounded-lg text-zinc-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all focus:outline-none ml-2"
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                    >
                      <FaTrashAlt className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 font-mono">
              <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-4">
                  ORDER SUMMARY
                </h2>

                <div className="space-y-3 text-xs font-bold">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 uppercase">SUBTOTAL</span>

                    <span className="text-zinc-900 font-extrabold text-sm">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 uppercase">SHIPPING</span>

                    <span className="text-emerald-600 font-extrabold bg-emerald-50 px-2 py-0.5 rounded text-[11px] border border-emerald-200">
                      FREE
                    </span>
                  </div>

                  <div className="h-px bg-zinc-200 w-full my-2"></div>

                  <div className="flex justify-between items-center text-base pt-1">
                    <span className="font-black text-zinc-900 uppercase tracking-wider">
                      TOTAL
                    </span>

                    <span className="font-black text-xl text-zinc-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#0a0a0a] hover:bg-[#c6f432] text-white hover:text-black font-extrabold text-sm py-4 rounded-xl uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
                >
                  PROCEED TO CHECKOUT
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
