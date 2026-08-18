import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Layout from '../Layout/Layout';
import PageNotfound from '../components/PageNotfound';
import Shop from '../pages/Shop';

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
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotfound />,
  },
]);
