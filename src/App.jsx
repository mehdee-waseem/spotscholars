import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Scholarships = lazy(() => import('./pages/Scholarships'));
const Programs = lazy(() => import('./pages/Programs'));
const Universities = lazy(() => import('./pages/Universities'));
const Guide = lazy(() => import('./pages/Guide'));
const Contact = lazy(() => import('./pages/Contact'));
const Resources = lazy(() => import('./pages/Resources'));
const NotFound = lazy(() => import('./pages/NotFound'));

const TITLES = {
  '/': 'SpotScholars – Study in France, made simple',
  '/scholarships': 'Scholarships – SpotScholars',
  '/programs': 'English-taught programs – SpotScholars',
  '/universities': 'Universities in France – SpotScholars',
  '/resources': 'Resources & videos – SpotScholars',
  '/contact': 'Contact – SpotScholars'
};

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = TITLES[pathname] || (pathname.startsWith('/guide') ? 'Guide – SpotScholars' : 'SpotScholars');
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <RouteEffects />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <div key={pathname} className="page-enter">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/guide/:slug" element={<Guide />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
