import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaShoppingBag,
  FaCreditCard,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaCalendarAlt,
} from 'react-icons/fa';

const OrderConfirmationPage = () => {
  const location = useLocation();

  const orderData = location.state;

  if (!orderData) {
    return <Navigate to="/shop" replace />;
  }

  const orderId = orderData?.orderId;
  const total = orderData?.total;
  const subtotal = orderData?.subtotal;
  const shipping = orderData?.shipping;
  const discount = orderData?.discount;

  const email = orderData?.email;
  const paymentMethod = orderData?.paymentMethod;

  const cartItems = orderData?.cartItems || [];

  const firstName = orderData?.firstName;
  const lastName = orderData?.lastName;
  const phone = orderData?.phone;
  const address = orderData?.address;
  const city = orderData?.city;
  const stateName = orderData?.stateName;
  const zip = orderData?.zip;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12 text-zinc-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 flex-col md:flex-row text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-[#c6f432] text-black flex items-center justify-center">
                <FaCheckCircle className="text-5xl" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs uppercase tracking-widest text-[#c6f432] font-mono mb-2">
                  ORDER CONFIRMED
                </div>

                <h1 className="text-2xl sm:text-4xl font-black uppercase">
                  Thank You For Your Purchase!
                </h1>

                <p className="text-zinc-400 text-sm mt-2 max-w-xl">
                  Your order has been placed successfully. A confirmation has
                  been sent to{' '}
                  <span className="text-white font-semibold">{email}</span>.
                </p>
              </div>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4 text-center min-w-[200px]">
              <p className="text-xs uppercase text-zinc-400 font-mono">
                Order Reference
              </p>

              <p className="text-xl font-mono font-bold text-[#c6f432] mt-1">
                #{orderId}
              </p>

              <p className="text-xs text-zinc-400 mt-2 flex items-center justify-center gap-2">
                <FaCalendarAlt className="text-[#c6f432]" />
                Estimated Delivery: 3-5 Days
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                <h2 className="text-base font-bold uppercase flex items-center gap-2">
                  <FaShoppingBag />
                  Order Items ({cartItems.length})
                </h2>
              </div>

              <div className="divide-y divide-zinc-100">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="py-4 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={item.images?.[0] || item.thumbnail}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-xl border border-zinc-200 bg-zinc-50 flex-shrink-0"
                      />

                      <div className="min-w-0">
                        <p className="text-sm font-bold truncate">
                          {item.title}
                        </p>

                        <p className="text-xs text-zinc-500 mt-1">
                          Quantity: {item.quantity}
                        </p>

                        <p className="text-xs text-zinc-500 mt-1">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-zinc-700" />
                  Shipping Address
                </h3>

                <div className="text-sm text-zinc-700 space-y-1">
                  <p className="font-bold text-zinc-900">
                    {firstName} {lastName}
                  </p>

                  <p>{address}</p>

                  <p>
                    {city}, {stateName} {zip}
                  </p>

                  <p className="text-zinc-500 flex items-center gap-2 pt-2">
                    <FaPhoneAlt className="text-xs" />
                    {phone}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3 flex items-center gap-2">
                  <FaCreditCard className="text-zinc-700" />
                  Payment Details
                </h3>

                <div className="text-sm space-y-2">
                  <p className="font-bold">{paymentMethod}</p>

                  {paymentMethod === 'card' && (
                    <p className="inline-flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-md text-xs font-bold">
                      ✓ Payment Successful
                    </p>
                  )}

                  {paymentMethod === 'cod' && (
                    <p className="inline-flex items-center bg-orange-200 text-orange-600 px-3 py-1 rounded-md text-xs font-bold">
                      Payment Pending
                    </p>
                  )}

                  <p className="text-zinc-500 flex items-center gap-2 pt-1">
                    <FaEnvelope className="text-xs" />
                    {email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
              <h2 className="text-base font-bold uppercase border-b border-zinc-100 pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 mt-4">
                <div className="flex justify-between text-sm text-zinc-600">
                  <span>Subtotal</span>

                  <span className="font-bold text-zinc-900">
                    ${subtotal?.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-zinc-600">
                  <span>Standard Shipping</span>

                  <span className="font-bold text-zinc-900">
                    ${shipping?.toFixed(2)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>

                    <span className="font-bold">-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t border-zinc-200 pt-4 flex justify-between items-center">
                  <span className="font-bold">Total Paid</span>

                  <span className="text-2xl font-black">
                    ${total?.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to="/shop"
                className="w-full mt-6 bg-zinc-950 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#c6f432] hover:text-black transition-all flex items-center justify-center gap-2"
              >
                Continue Shopping
                <FaArrowRight />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="font-bold uppercase text-sm">
                Delivery Information
              </h3>

              <div className="mt-4 space-y-3 text-sm text-zinc-600">
                <p>✓ Your order has been received and is being processed.</p>

                <p>✓ Your order will be shipped within 1-2 business days.</p>

                <p>✓ Estimated delivery time is 3-5 business days.</p>

                <p>✓ Order updates will be sent to your email.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
