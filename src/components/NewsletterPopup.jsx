import { FaCheck, FaTimes, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';

const NewsletterPopup = ({ isOpen, email, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#18181a] p-6 text-center shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          <FaTimes className="text-sm" />
        </button>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#baff00]/10">
          <FaCheck className="text-xl text-[#baff00]" />
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-2xl font-bold text-white">
          You're Subscribed!
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Thanks for subscribing. We'll send the latest news and updates to your
          inbox.
        </p>

        <div className="mt-5 flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-left">
          <FaEnvelope className="shrink-0 text-gray-500" />

          <span className="break-all text-sm font-medium text-white">
            {email}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-[#baff00] px-5 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-[#c5ff2e]"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
