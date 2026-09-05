import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bannerbg from '../assets/images/bannerbg.jpg';

const Hero = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute">
        <img
          src={bannerbg}
          alt="Multi-sport equipment layout background"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-32 flex flex-col justify-center min-h-[500px] lg:min-h-[640px]">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-[#c6f432]/40 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#c6f432] animate-ping"></span>
            <span className="text-xs font-bold tracking-widest text-[#c6f432] uppercase">
              PREMIUM ATHLETIC GEAR
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
            <span>GEAR FOR</span> <br className="hidden sm:inline" />
            <span className="text-[#c6f432] underline decoration-[#c6f432]/30 underline-offset-8">
              EVERY GAME.
            </span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Top quality sports gear for champions at every level. Engineered for
            durability, performance, and match victory.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-[#c6f432] hover:bg-[#b2e023] text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-md tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(198,244,50,0.3)]"
            >
              <FaShoppingBag className="w-4 h-4" />
              SHOP NOW
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 font-bold text-sm sm:text-base px-8 py-4 rounded-md tracking-wider uppercase transition-all"
            >
              EXPLORE COLLECTION
              <FaArrowRight className="w-4 h-4 text-[#c6f432]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
