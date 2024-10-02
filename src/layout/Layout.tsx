import { Outlet } from 'react-router-dom/dist';
import Header from './Header';

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-grow pl-2">
      <Outlet />
    </div>
  </div>
);

export default Layout;
