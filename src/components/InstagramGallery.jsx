import { FaInstagram } from 'react-icons/fa';
import instagalllerydata from '../utils/instagalllerydata';

const InstagramGallery = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-1 bg-[#c6f432] rounded-full"></span>
              <span className="text-xs font-black tracking-widest text-[#c6f432] uppercase">
                INSTAGRAM @SPORTSPRO.INDIA
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
              FOLLOW THE GAME
            </h2>
            <p className="text-sm text-zinc-400 mt-1 font-medium">
              See how our community plays, trains, and wins.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-md transition-all self-start sm:self-auto"
          >
            <FaInstagram className="w-4 h-4 text-[#c6f432]" />
            VIEW ON INSTAGRAM
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto no-scrollbar pb-2">
          {instagalllerydata.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.sport}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                <FaInstagram className="w-7 h-7 text-[#c6f432] mb-1 transform -translate-y-2 group-hover:translate-y-0 transition-transform" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {item.sport}
                </span>
              </div>
            </div>
          ))}

          <div className="relative aspect-square rounded-lg bg-zinc-900 border-2 border-dashed border-zinc-700 hover:border-[#c6f432] p-4 flex flex-col items-center justify-center text-center transition-colors group flex-shrink-0">
            <FaInstagram className="w-8 h-8 text-[#c6f432] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="font-sans font-extrabold text-sm text-white uppercase tracking-wider">
              FOLLOW US
            </h4>
            <p className="text-[11px] font-semibold text-zinc-400 mt-1">
              @sportspro.india
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
