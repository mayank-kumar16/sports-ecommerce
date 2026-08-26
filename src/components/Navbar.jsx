import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoSportsWhite from '../assets/images/logo-sports-white.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchInput = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const wishlist = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] text-white border-b border-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={handleMenuToggle}
              className="p-2 text-zinc-300 hover:text-[#c6f432] transition-colors"
              aria-label={
                isMenuOpen
                  ? 'Close mobile navigation menu'
                  : 'Open mobile navigation menu'
              }
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="flex flex-col group">
              <div className="flex items-center gap-1.5">
                <img
                  src={logoSportsWhite}
                  alt="Sports logo"
                  className="w-36 sm:w-40 lg:w-48 h-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-bold text-[#c6f432] tracking-wider hover:opacity-90 transition-opacity uppercase"
            >
              HOME
            </Link>

            <Link
              to="/shop"
              className="text-sm font-bold text-zinc-200 tracking-wider hover:text-[#c6f432] transition-colors uppercase"
            >
              SHOP
            </Link>
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search gear, sports..."
                className="bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-400 rounded-full pl-9 pr-4 py-2 w-48 lg:w-60 focus:outline-none focus:border-[#c6f432] transition-all"
                value={searchValue}
                onChange={handleSearchInput}
              />

              <FaSearch className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
            </div>

            <Link
              to="/wishlist"
              className="p-2 text-zinc-300 hover:text-[#c6f432] transition-colors relative"
              aria-label="Wishlist items"
            >
              <FaHeart className="w-5 h-5" />

              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c6f432] text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="p-2 text-zinc-300 hover:text-[#c6f432] transition-colors relative"
              aria-label="Shopping Cart"
            >
              <FaShoppingBag className="w-5 h-5" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c6f432] text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-t border-b border-zinc-800 shadow-lg">
          {/* Mobile Search */}
          <div className="p-4 border-b border-zinc-800">
            <div className="relative">
              <input
                type="text"
                placeholder="Search gear, sports..."
                className="w-full bg-zinc-900 border border-zinc-700 text-sm text-white placeholder-zinc-400 rounded-full pl-10 pr-4 py-3 focus:outline-none focus:border-[#c6f432] transition-colors"
                value={searchValue}
                onChange={handleSearchInput}
              />

              <FaSearch className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
            </div>
          </div>

          <nav className="flex flex-col">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="px-6 py-5 text-sm font-bold tracking-wider text-[#c6f432] uppercase border-b border-zinc-800 hover:bg-zinc-900 transition-colors"
            >
              HOME
            </Link>

            <Link
              to="/shop"
              onClick={closeMobileMenu}
              className="px-6 py-5 text-sm font-bold tracking-wider text-zinc-200 uppercase border-b border-zinc-800 hover:text-[#c6f432] hover:bg-zinc-900 transition-colors"
            >
              SHOP
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
