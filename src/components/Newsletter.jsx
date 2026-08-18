import { FaEnvelope, FaTrophy } from 'react-icons/fa';
import NewsletterPopup from './NewsletterPopup';
import { useState } from 'react';

const Newsletter = () => {
  const [newsInput, setNewsInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleNewsInput = (event) => {
    setNewsInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (newsInput.trim() === '') {
      return;
    }
    setIsOpen(true);
  };

  const handleonClose = (event) => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="bg-[#0a0a0a] text-white py-16 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c6f432]/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl text-center lg:text-left space-y-3">
              <div className="inline-flex items-center gap-2 text-[#c6f432] font-black text-xs tracking-widest uppercase">
                <FaTrophy className="w-4 h-4" />
                JOIN THE SPORTSPRO CLUB
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
                STAY AHEAD OF THE GAME
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base font-normal">
                Get exclusive deals, new arrivals, training gear alerts and
                insider offers delivered directly to your inbox.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
              <form
                onSubmit={handleInputSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-1">
                  <FaEnvelope className="w-4 h-4 text-zinc-400 absolute left-4 top-4" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 rounded-md pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#c6f432] transition-colors"
                    value={newsInput}
                    onChange={handleNewsInput}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#c6f432] hover:bg-[#b2e023] text-black font-extrabold text-sm px-8 py-3.5 rounded-md uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(198,244,50,0.3)] flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
              <p className="text-[11px] text-zinc-500 mt-2 text-center lg:text-left">
                By subscribing, you agree to our Privacy Policy and Terms of
                Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <NewsletterPopup
          email={newsInput}
          isOpen={isOpen}
          onClose={handleonClose}
        />
      )}
    </>
  );
};

export default Newsletter;
