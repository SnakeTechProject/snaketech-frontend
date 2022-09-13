import { Route, Routes } from 'react-router-dom';
// import { DefaultLayout } from '../layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Blog } from '../pages/Blog';

import { DefaultLayout } from '../layout/DefaultLayout';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
