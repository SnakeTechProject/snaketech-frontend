import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Blog } from '../pages/Blog';

import { DefaultLayout } from '../layout/DefaultLayout';
import { NotFound } from '../pages/NotFound';
// import { Profile } from '../pages/Profile';
import { ChallengePage } from '../pages/ChallengePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/challenges" element={<ChallengePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
