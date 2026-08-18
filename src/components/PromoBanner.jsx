import { FaShoppingBag } from 'react-icons/fa';
import offerbg from '../assets/images/offerbg.jpg';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
        <img
          src={offerbg}
          alt="Multi-sports action banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/10 to-[#0a0a0a]/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-5">
          <span className="inline-block bg-[#c6f432] text-black text-xs font-black tracking-widest px-3 py-1 rounded uppercase">
            LIMITED EDITION GEAR
          </span>

          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
            BUILT FOR PASSION.
            <br />
            <span className="text-[#c6f432]">MADE FOR VICTORY.</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg font-normal max-w-xl">
            Top brands. Unmatched performance across all major international
            sports.
          </p>

          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2.5 bg-[#c6f432] hover:bg-[#b2e023] text-black font-black text-sm sm:text-base px-8 py-4 rounded-md tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(198,244,50,0.3)] transform hover:-translate-y-0.5"
            >
              <FaShoppingBag className="w-4 h-4" />
              SHOP THE COLLECTION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
