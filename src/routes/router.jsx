import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Layout from '../Layout/Layout';
import PageNotfound from '../components/PageNotfound';

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
        path: 'product/:id',
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotfound />,
  },
]);
