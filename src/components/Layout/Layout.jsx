import PageHeader from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <PageHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
