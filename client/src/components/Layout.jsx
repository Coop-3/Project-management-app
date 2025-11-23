import { Outlet } from 'react-router-dom';
import SideNav from './SideNav.jsx';
import TopBar from './TopBar.jsx';

function Layout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideNav />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <TopBar />
        <main style={{ flex: 1, padding: 20, overflowY: 'auto', backgroundColor: '#F5F5F5' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;