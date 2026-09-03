import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Layout from '../Layout/Layout';
import PageNotfound from '../components/PageNotfound';
import Shop from '../pages/Shop';
import CartPage from '../pages/CartPage';
import WishlistPage from '../pages/WishlistPage';
import Checkout from '../pages/Checkout';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
import AboutPage from '../pages/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/wishlist',
        element: <WishlistPage />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/order-confirmation',
        element: <OrderConfirmationPage />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotfound />,
  },
]);
