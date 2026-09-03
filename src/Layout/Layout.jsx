import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
