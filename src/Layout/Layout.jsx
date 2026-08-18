import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
