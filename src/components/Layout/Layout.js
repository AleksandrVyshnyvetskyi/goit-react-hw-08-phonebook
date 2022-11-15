import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import NavBar from 'components/NavBar/NavBar';

export default function Layout() {
  return (
    <>
      <div id="screen" className="login-screen-bgd">
        <NavBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
