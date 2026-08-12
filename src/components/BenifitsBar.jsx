import React from 'react';
import { FaShieldAlt, FaLock, FaSyncAlt, FaTruck } from 'react-icons/fa';

const benifits = [
  {
    id: 1,
    icon: FaShieldAlt,
    title: '100% ORIGINAL',
    subtitle: 'Genuine Products',
  },
  {
    id: 2,
    icon: FaLock,
    title: 'SECURE PAYMENT',
    subtitle: 'Safe & Encrypted',
  },
  {
    id: 3,
    icon: FaSyncAlt,
    title: 'EASY RETURNS',
    subtitle: '7 Days Return Policy',
  },
  {
    id: 4,
    icon: FaTruck,
    title: 'FAST DELIVERY',
    subtitle: 'Pan India Delivery',
  },
];

const BenifitsBar = () => {
  return (
    <div className="bg-[#0a0a0a] border-y border-zinc-800/80 py-6 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benifits.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3.5 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/50 hover:border-[#c6f432]/30 transition-colors"
              >
                <div className="p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-[#c6f432] flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-extrabold tracking-wider text-white uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenifitsBar;
