import React from 'react';
import { Link } from 'react-router-dom';
import aboutimg from '../assets/images/aboutimg.png';
import {
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaAward,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { label: 'Happy Athletes', value: '50K+' },
    { label: 'Authentic Brands', value: '25+' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Countries Served', value: '30+' },
  ];

  const values = [
    {
      icon: FaAward,
      title: 'Uncompromised Quality',
      description:
        'We source only 100% genuine equipment from world-leading sports manufacturers.',
    },
    {
      icon: FaTruck,
      title: 'Fast & Secure Shipping',
      description:
        'Reliable express delivery with real-time tracking so your gear arrives on time.',
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Support',
      description:
        'Our team of sports enthusiasts is available 24/7 to help you choose the right gear.',
    },
    {
      icon: FaShieldAlt,
      title: '30-Day Guarantee',
      description:
        'Hassle-free 30-day returns and exchanges on all your purchases.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-[#c6f432] selection:text-black">
      {/* HERO SECTION */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#c6f432]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] uppercase tracking-widest text-[#c6f432] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#c6f432]"></span>
            ABOUT SPORTS X
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
            ELEVATING ATHLETIC PERFORMANCE EVERYWHERE
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            At Sports X, we believe everyone deserves access to
            professional-grade equipment. Whether you are a seasoned pro or
            starting your journey, we empower your active lifestyle.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-zinc-50 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl sm:text-4xl font-black text-zinc-950 font-mono tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & STORY SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#84cc16] font-bold">
              Our Mission
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950">
              BUILT FOR ATHLETES, BY ATHLETES
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Founded with a passion for sports, Sports X has grown into a
              premier destination for athletes worldwide. We curate top-tier
              gear across football, cricket, badminton, fitness, and outdoor
              sports.
            </p>
            <div className="space-y-3 pt-2 text-xs sm:text-sm font-semibold text-zinc-800">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#84cc16] w-4 h-4 flex-shrink-0" />
                <span>
                  Verified 100% authentic equipment from authorized distributors
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#84cc16] w-4 h-4 flex-shrink-0" />
                <span>Rigorous quality inspection before dispatch</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#84cc16] w-4 h-4 flex-shrink-0" />
                <span>Transparent pricing with no hidden charges</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 aspect-4/3 bg-zinc-100">
            <img
              src={aboutimg}
              alt="Athletes training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200/80 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-950">
              WHY CHOOSE SPORTS X
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              We standardise excellence across every order and product we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 text-[#c6f432] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950">
          READY TO GEAR UP FOR YOUR NEXT GAME?
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto">
          Browse our full catalog of high-performance gear, apparel, and
          accessories today.
        </p>
        <div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-lg"
          >
            EXPLORE STORE <FaArrowRight className="text-[#c6f432]" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
