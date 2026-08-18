import offerbg from '../assets/images/offerbg.jpg';

const ShopHeader = () => {
  return (
    <div className="relative bg-[#0a0a0a] text-white py-12 sm:py-16 border-b border-zinc-800 overflow-hidden">
      <img
        src={offerbg}
        alt="Shop Hero Sports Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
          <span className="w-8 h-1 bg-[#c6f432] rounded-full"></span>
          <span className="text-xs font-black tracking-widest text-[#c6f432] uppercase">
            GEAR UP FOR VICTORY
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
          SHOP
        </h1>
        <p className="mt-2 text-base sm:text-lg text-zinc-300 max-w-2xl font-medium">
          Premium sports gear for every game.
        </p>
      </div>
    </div>
  );
};

export default ShopHeader;
