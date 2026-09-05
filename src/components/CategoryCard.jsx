import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { name, tag, image, subtitle } = category;

  return (
    <Link
      to={`/shop?category=${tag}`}
      className="group relative h-64 rounded-lg overflow-hidden flex flex-col justify-end p-3 p-m-5 bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:border-[#c6f432] hover:shadow-[0_0_20px_rgba(198,244,50,0.3)]"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:scale-110 group-hover:opacity-85 transition-all duration-500"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      <div className="relative z-10 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-extrabold tracking-widest text-[#c6f432] uppercase leading-[12px] ">
            {subtitle}
          </span>
          <h3 className="font-sans font-black text-[15px] sm:text-2xl text-white tracking-wider uppercase group-hover:text-[#c6f432] transition-colors">
            {name}
          </h3>
        </div>

        <div className="p-2 rounded-full bg-black/60 border border-white/20 text-white group-hover:bg-[#c6f432] group-hover:text-black group-hover:border-[#c6f432] transition-all">
          <FaArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
