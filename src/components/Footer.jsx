import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaShieldAlt,
  FaSyncAlt,
} from 'react-icons/fa';
import logowhite from '../assets/images/logo-sports-white.png';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0a] px-4 pb-8 pt-16 text-zinc-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-zinc-800 pb-12 md:grid-cols-3">
          <div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-3xl font-black tracking-tighter text-white">
                  <img
                    src={logowhite}
                    alt="sportsx-logo"
                    className="max-w-[150px]"
                  />
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-[#c6f432]" />
              </div>

              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                PLAY. TRAIN. WIN.
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Your one-stop destination for premium sports gear from top brands
              worldwide.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2.5 text-zinc-300 transition-colors hover:border-[#c6f432] hover:text-[#c6f432]"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2.5 text-zinc-300 transition-colors hover:border-[#c6f432] hover:text-[#c6f432]"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2.5 text-zinc-300 transition-colors hover:border-[#c6f432] hover:text-[#c6f432]"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2.5 text-zinc-300 transition-colors hover:border-[#c6f432] hover:text-[#c6f432]"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              EXPLORE
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm font-semibold">
              <Link
                to="/"
                className="w-fit text-zinc-400 transition-colors hover:text-[#c6f432]"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="w-fit text-zinc-400 transition-colors hover:text-[#c6f432]"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="w-fit text-zinc-400 transition-colors hover:text-[#c6f432]"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              WE ACCEPT
            </h4>

            <div className="mt-5 flex flex-wrap gap-2">
              <div className="flex h-10 min-w-[64px] items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 px-3">
                <span className="text-sm font-black italic text-white">
                  VISA
                </span>
              </div>

              <div className="flex h-10 min-w-[64px] items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 px-3">
                <div className="flex items-center">
                  <span className="h-4 w-4 rounded-full bg-red-500" />
                  <span className="-ml-2 h-4 w-4 rounded-full bg-yellow-400 opacity-90" />
                </div>
              </div>

              <div className="flex h-10 min-w-[64px] items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 px-3">
                <span className="text-[10px] font-black text-white">AMEX</span>
              </div>

              <div className="flex h-10 min-w-[64px] items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 px-3">
                <span className="text-xs font-bold text-white"> Pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-semibold text-zinc-500 sm:flex-row">
          <div className="text-center sm:text-left">
            © 2026 SportsPro. All rights reserved. Premium Sports Accessories.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <FaShieldAlt className="h-4 w-4 text-[#c6f432]" />
              <span>100% SECURE PAYMENT</span>
            </div>

            <div className="flex items-center gap-1.5 text-zinc-400">
              <FaSyncAlt className="h-4 w-4 text-[#c6f432]" />
              <span>EASY RETURNS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
