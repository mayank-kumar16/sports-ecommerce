import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-64 max-w-[70%] mx-auto object-contain"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-xl font-bold mt-2">${product.price}</p>
      </div>
      <div className="w-full p-4 flex gap-2 justify-between">
        <Link
          to={`/product/${product.id}`}
          className="inline-block border-gray-400 border-2 rounded-xl font-bold text-sm max-w-lg px-4 py-2"
        >
          view
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
