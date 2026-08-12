import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';

const Layout = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
