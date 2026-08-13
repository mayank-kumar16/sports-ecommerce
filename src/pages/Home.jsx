import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productService';
import LoaderProductList from '../components/LoaderProductList';
import ErrorProducts from '../components/ErrorProducts';
import Hero from '../components/Hero';
import BenifitsBar from '../components/BenifitsBar';
import TrendingProducts from '../components/TrendingProducts';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAllproducts = async () => {
      setLoading(true);
      try {
        const allproducts = await getAllProducts();
        setProducts(allproducts);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadAllproducts();
  }, []);

  if (loading) {
    return <LoaderProductList />;
  }

  if (error) {
    return <ErrorProducts />;
  }

  if (products.length === 0) {
    return <p>no product found</p>;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col antialiased selection:bg-brand-neon selection:text-black">
      <Hero />
      <BenifitsBar />
      <TrendingProducts />
    </div>
  );
};

export default Home;
