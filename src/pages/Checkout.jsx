import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaMapMarkerAlt,
  FaCity,
  FaMap,
  FaHashtag,
  FaCreditCard,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaLock,
  FaTag,
  FaShieldAlt,
  FaTruck,
} from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [zip, setZip] = useState('');

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = 8;

  const total = subtotal + shipping - discount;

  const handleApplyCoupon = () => {
    const couponCode = coupon.trim().toUpperCase();

    if (couponCode === 'SAVE10') {
      const discountAmount = subtotal * 0.1;

      setDiscount(discountAmount);
      setCouponMessage('SAVE10 applied - 10% OFF');
    } else {
      setDiscount(0);
      setCouponMessage('Invalid coupon code');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    }

    if (phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
    }

    if (firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
    }

    if (lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
    }

    if (address.trim() === '') {
      newErrors.address = 'Address is required';
    }

    if (city.trim() === '') {
      newErrors.city = 'City is required';
    }

    if (stateName.trim() === '') {
      newErrors.stateName = 'State is required';
    }

    if (zip.trim() === '') {
      newErrors.zip = 'ZIP code is required';
    }

    if (paymentMethod === 'card') {
      if (cardNumber.trim() === '') {
        newErrors.cardNumber = 'Card number is required';
      }

      if (cardHolder.trim() === '') {
        newErrors.cardHolder = 'Cardholder name is required';
      }

      if (expiry.trim() === '') {
        newErrors.expiry = 'Expiry date is required';
      }

      if (cvv.trim() === '') {
        newErrors.cvv = 'CVV is required';
      }
    }

    setErrors(newErrors);

    if (
      newErrors.email ||
      newErrors.phone ||
      newErrors.firstName ||
      newErrors.lastName ||
      newErrors.address ||
      newErrors.city ||
      newErrors.stateName ||
      newErrors.zip ||
      newErrors.cardNumber ||
      newErrors.cardHolder ||
      newErrors.expiry ||
      newErrors.cvv
    ) {
      return false;
    }

    return true;
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid === false) {
      return;
    }

    const orderId = 'SPX-' + Math.floor(100000 + Math.random() * 900000);

    dispatch(clearCart());

    navigate('/order-confirmation', {
      state: {
        orderId: orderId,
        total: total,
        subtotal: subtotal,
        shipping: shipping,
        discount: discount,
        email: email,
        paymentMethod: paymentMethod,

        cartItems: cartItems,

        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
        city: city,
        stateName: stateName,
        zip: zip,
      },
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4">
        <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center max-w-md w-full shadow-sm">
          <h1 className="text-2xl font-black uppercase font-mono">
            Your Cart Is Empty
          </h1>

          <p className="text-sm text-zinc-500 mt-3">
            Add some products to your cart before checkout.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-6 bg-black text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#c6f432] hover:text-black transition-all"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-black transition-colors"
          >
            <FaArrowLeft />
            BACK TO CART
          </Link>

          <h1 className="text-3xl sm:text-4xl font-black uppercase font-mono mt-4">
            CHECKOUT
          </h1>

          <p className="text-sm text-zinc-500 mt-1">
            Complete your order by entering your details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <form
              onSubmit={handlePlaceOrder}
              className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-8 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>

                  <h2 className="text-sm font-black uppercase tracking-wider">
                    Contact Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Email Address *
                    </label>

                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                      <input
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        placeholder="Enter your email"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-zinc-200'
                        } focus:outline-none focus:border-black text-sm`}
                      />
                    </div>

                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Phone Number *
                    </label>

                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                      <input
                        type="tel"
                        value={phone}
                        onChange={(event) => {
                          setPhone(event.target.value.replace(/\D/g, ''));
                        }}
                        placeholder="Enter your phone number"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-500' : 'border-zinc-200'
                        } focus:outline-none focus:border-black text-sm`}
                      />
                    </div>

                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-100 mt-8 pt-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>

                  <h2 className="text-sm font-black uppercase tracking-wider">
                    Shipping Address
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold mb-2">
                        First Name *
                      </label>

                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                          type="text"
                          value={firstName}
                          onChange={(event) => {
                            setFirstName(event.target.value);
                          }}
                          placeholder="First name"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.firstName
                              ? 'border-red-500'
                              : 'border-zinc-200'
                          } focus:outline-none focus:border-black text-sm`}
                        />
                      </div>

                      {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-2">
                        Last Name *
                      </label>

                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                          type="text"
                          value={lastName}
                          onChange={(event) => {
                            setLastName(event.target.value);
                          }}
                          placeholder="Last name"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.lastName
                              ? 'border-red-500'
                              : 'border-zinc-200'
                          } focus:outline-none focus:border-black text-sm`}
                        />
                      </div>

                      {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Address *
                    </label>

                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                      <input
                        type="text"
                        value={address}
                        onChange={(event) => {
                          setAddress(event.target.value);
                        }}
                        placeholder="Street address"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          errors.address ? 'border-red-500' : 'border-zinc-200'
                        } focus:outline-none focus:border-black text-sm`}
                      />
                    </div>

                    {errors.address && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold mb-2">
                        City *
                      </label>

                      <div className="relative">
                        <FaCity className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                          type="text"
                          value={city}
                          onChange={(event) => {
                            setCity(event.target.value);
                          }}
                          placeholder="City"
                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${
                            errors.city ? 'border-red-500' : 'border-zinc-200'
                          } focus:outline-none focus:border-black text-sm`}
                        />
                      </div>

                      {errors.city && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-2">
                        State *
                      </label>

                      <div className="relative">
                        <FaMap className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                          type="text"
                          value={stateName}
                          onChange={(event) => {
                            setStateName(event.target.value);
                          }}
                          placeholder="State"
                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${
                            errors.stateName
                              ? 'border-red-500'
                              : 'border-zinc-200'
                          } focus:outline-none focus:border-black text-sm`}
                        />
                      </div>

                      {errors.stateName && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.stateName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-2">
                        ZIP Code *
                      </label>

                      <div className="relative">
                        <FaHashtag className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                          type="text"
                          value={zip}
                          onChange={(event) => {
                            setZip(event.target.value.replace(/\D/g, ''));
                          }}
                          placeholder="ZIP"
                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${
                            errors.zip ? 'border-red-500' : 'border-zinc-200'
                          } focus:outline-none focus:border-black text-sm`}
                        />
                      </div>

                      {errors.zip && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.zip}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-100 mt-8 pt-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                    3
                  </span>

                  <h2 className="text-sm font-black uppercase tracking-wider">
                    Payment Method
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setPaymentMethod('cod');
                    }}
                    className={`p-4 rounded-xl border-2 text-left ${
                      paymentMethod === 'cod'
                        ? 'border-[#c6f432] bg-[#c6f432]/10'
                        : 'border-zinc-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FaMoneyBillWave className="text-lg" />

                      <div>
                        <p className="text-sm font-bold">Cash on Delivery</p>

                        <p className="text-xs text-zinc-500 mt-1">
                          Pay when your order arrives.
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPaymentMethod('card');
                    }}
                    className={`p-4 rounded-xl border-2 text-left ${
                      paymentMethod === 'card'
                        ? 'border-[#c6f432] bg-[#c6f432]/10'
                        : 'border-zinc-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FaCreditCard className="text-lg" />

                      <div>
                        <p className="text-sm font-bold">Credit / Debit Card</p>

                        <p className="text-xs text-zinc-500 mt-1">
                          Pay using your card.
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-bold mb-2">
                        Card Number *
                      </label>

                      <div className="relative">
                        <FaCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(event) => {
                            const value = event.target.value
                              .replace(/\D/g, '')
                              .slice(0, 16);

                            setCardNumber(value);
                          }}
                          placeholder="1234 5678 9012 3456"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.cardNumber
                              ? 'border-red-500'
                              : 'border-zinc-200'
                          } focus:outline-none focus:border-black text-sm`}
                        />
                      </div>

                      {errors.cardNumber && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-2">
                        Cardholder Name *
                      </label>

                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(event) => {
                            setCardHolder(event.target.value);
                          }}
                          placeholder="Name on card"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.cardHolder
                              ? 'border-red-500'
                              : 'border-zinc-200'
                          } focus:outline-none focus:border-black text-sm`}
                        />
                      </div>

                      {errors.cardHolder && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.cardHolder}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold mb-2">
                          Expiry Date *
                        </label>

                        <div className="relative">
                          <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                          <input
                            type="text"
                            value={expiry}
                            onChange={(event) => {
                              setExpiry(event.target.value);
                            }}
                            placeholder="MM/YY"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                              errors.expiry
                                ? 'border-red-500'
                                : 'border-zinc-200'
                            } focus:outline-none focus:border-black text-sm`}
                          />
                        </div>

                        {errors.expiry && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.expiry}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold mb-2">
                          CVV *
                        </label>

                        <div className="relative">
                          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                          <input
                            type="password"
                            value={cvv}
                            onChange={(event) => {
                              setCvv(event.target.value);
                            }}
                            placeholder="123"
                            maxLength="4"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                              errors.cvv ? 'border-red-500' : 'border-zinc-200'
                            } focus:outline-none focus:border-black text-sm`}
                          />
                        </div>

                        {errors.cvv && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.cvv}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-zinc-100 mt-8 pt-6">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-wider text-sm hover:bg-[#c6f432] hover:text-black transition-all flex items-center justify-center gap-3"
                >
                  <FaLock className="text-[#c6f432]" />
                  PLACE ORDER
                  <span>${total.toFixed(2)}</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mt-3">
                  <FaShieldAlt className="text-emerald-600" />
                  Secure checkout
                </div>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-7 shadow-sm lg:sticky lg:top-24">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <h2 className="text-sm font-black uppercase tracking-wider">
                  Order Summary
                </h2>

                <span className="text-xs font-bold bg-zinc-100 px-3 py-1 rounded-full">
                  {cartItems.reduce((total, item) => {
                    return total + item.quantity;
                  }, 0)}{' '}
                  ITEMS
                </span>
              </div>

              <div className="divide-y divide-zinc-100 max-h-[350px] overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-zinc-50 border border-zinc-100 p-2 flex-shrink-0">
                      <img
                        src={item.images?.[0]}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold truncate">
                        {item.title}
                      </h3>

                      <p className="text-xs text-zinc-500 mt-1">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm font-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-100 pt-5 mt-2">
                <label className="text-xs font-bold uppercase tracking-wider">
                  Coupon Code
                </label>

                <div className="flex gap-2 mt-2">
                  <div className="relative flex-1">
                    <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

                    <input
                      type="text"
                      value={coupon}
                      onChange={(event) => {
                        setCoupon(event.target.value);
                      }}
                      placeholder="SAVE10"
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-zinc-200 text-sm uppercase focus:outline-none focus:border-black"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="bg-black text-white px-5 rounded-xl text-xs font-bold uppercase hover:bg-[#c6f432] hover:text-black transition-all"
                  >
                    APPLY
                  </button>
                </div>

                {couponMessage && (
                  <p
                    className={`text-xs mt-2 ${
                      discount > 0 ? 'text-emerald-600' : 'text-red-500'
                    }`}
                  >
                    {couponMessage}
                  </p>
                )}
              </div>

              <div className="border-t border-zinc-100 mt-5 pt-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Subtotal</span>

                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-sm text-emerald-600">
                    <span>Discount</span>

                    <span className="font-bold">-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Shipping</span>

                  <span className="font-bold">${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-zinc-200 mt-5 pt-5 flex justify-between items-center">
                <span className="text-lg font-black uppercase">Total</span>

                <span className="text-2xl font-black text-[#84cc16]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="bg-zinc-50 rounded-xl p-4 mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaTruck className="text-zinc-700" />

                  <div>
                    <p className="text-xs font-bold">Fast Shipping</p>

                    <p className="text-[10px] text-zinc-500">
                      Reliable delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-zinc-700" />

                  <div>
                    <p className="text-xs font-bold">Easy Returns</p>

                    <p className="text-[10px] text-zinc-500">
                      Hassle-free returns
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaLock className="text-zinc-700" />

                  <div>
                    <p className="text-xs font-bold">Secure Checkout</p>

                    <p className="text-[10px] text-zinc-500">
                      Your information is protected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
