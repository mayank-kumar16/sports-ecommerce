import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { review: quoteText, author, role, avatar } = review;

  return (
    <div className="bg-white border border-zinc-200 p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-between h-full min-h-[220px]">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-amber-400 gap-1">
            <FaStar className="w-3.5 h-3.5 text-amber-400" />
            <FaStar className="w-3.5 h-3.5 text-amber-400" />
            <FaStar className="w-3.5 h-3.5 text-amber-400" />
            <FaStar className="w-3.5 h-3.5 text-amber-400" />
            <FaStar className="w-3.5 h-3.5 text-zinc-300" />
          </div>
          <FaQuoteLeft className="w-5 h-5 text-zinc-300" />
        </div>

        <p className="text-zinc-800 text-sm sm:text-base font-medium italic leading-relaxed mb-6">
          "{quoteText}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
        <img
          src={avatar}
          alt={author}
          className="w-11 h-11 rounded-full object-cover border-2 border-[#c6f432]"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-extrabold text-zinc-900 text-sm">{author}</h4>
            <FaCheckCircle className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <p className="text-xs font-semibold text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
