import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoaderProductDetails from '../components/LoaderProductDetails';
import { getProductById } from '../services/productService';
import ErrorProducts from '../components/ErrorProducts';

const ProductDetails = () => {
  const { id } = useParams();
  const [currentProduct, setcurrentProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentProd = async () => {
      setLoading(true);
      try {
        const currentProd = await getProductById(id);
        setcurrentProduct(currentProd);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentProd();
  }, [id]);

  if (loading) {
    return <LoaderProductDetails />;
  }

  if (error) {
    return <ErrorProducts />;
  }

  if (currentProduct === null) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto w-full max-w-[90%] p-6">
      <div className="my-4 flex flex-row justify-start">
        <Link to="/" className="text-lg font-bold no-underline hover:underline">
          Back to shop
        </Link>
      </div>

      <div className="mx-auto flex flex-col gap-10 p-4 md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={currentProduct?.images[0]}
            alt={currentProduct.title}
            className="w-full max-w-lg rounded-lg"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-3xl font-bold">{currentProduct.title}</h1>

          <p className="mt-4 text-2xl font-semibold">${currentProduct.price}</p>

          <p className="mt-6 text-gray-600">{currentProduct.description}</p>

          <p className="mt-6">
            <span className="font-semibold">Category:</span>{' '}
            {currentProduct.category}
          </p>

          <p className="mt-3">
            <span className="font-semibold">Rating:</span> ⭐{' '}
            {currentProduct.rating}
          </p>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100"
            >
              ♡ Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
