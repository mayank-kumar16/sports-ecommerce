import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productService';
import LoaderProductList from '../components/LoaderProductList';
import ErrorProducts from '../components/ErrorProducts';
import Hero from '../components/Hero';
import BenifitsBar from '../components/BenifitsBar';
import TrendingProducts from '../components/TrendingProducts';
import ShopByCategory from '../components/ShopByCategory';
import Bestsellers from '../components/Bestsellers';
import PromoBanner from '../components/PromoBanner';
import ReviewsSection from '../components/ReviewsSection';
import InstagramGallery from '../components/InstagramGallery';
import Newsletter from '../components/Newsletter';

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
      <TrendingProducts products={products} />
      <ShopByCategory />
      <Bestsellers products={products} />
      <PromoBanner />
      <ReviewsSection />
      <InstagramGallery />
      <Newsletter />
    </div>
  );
};

export default Home;
