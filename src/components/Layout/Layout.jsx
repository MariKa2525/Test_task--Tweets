import css from './Layout.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};
