// Smoke test: every page renders without crashing, with the navbar and footer.
// Rendered to HTML on the server (no browser needed), at a real URL so routing works.
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';
import Home from '../src/pages/Home.jsx';
import Scholarships from '../src/pages/Scholarships.jsx';
import Programs from '../src/pages/Programs.jsx';
import Universities from '../src/pages/Universities.jsx';
import Guide from '../src/pages/Guide.jsx';
import Resources from '../src/pages/Resources.jsx';
import Contact from '../src/pages/Contact.jsx';
import NotFound from '../src/pages/NotFound.jsx';
import { GUIDE_NAV } from '../src/lib/links.js';

const render = (url, path, element) =>
  renderToString(
    <MemoryRouter initialEntries={[url]}>
      <Navbar />
      <Routes>
        <Route path={path} element={element} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );

const pages = [
  ['/', '/', <Home />],
  ['/scholarships', '/scholarships', <Scholarships />],
  ['/programs', '/programs', <Programs />],
  ['/universities', '/universities', <Universities />],
  ['/resources', '/resources', <Resources />],
  ['/contact', '/contact', <Contact />],
  ['/no-such-page', '*', <NotFound />],
  ...GUIDE_NAV.map(g => [`/guide/${g.slug}`, '/guide/:slug', <Guide />])
];

describe('pages', () => {
  // React Router's links use useLayoutEffect, which only warns on the server. Hide that
  // one warning so real errors stay visible.
  let spy;
  beforeAll(() => {
    const original = console.error;
    spy = vi.spyOn(console, 'error').mockImplementation((msg, ...rest) => {
      if (String(msg).includes('useLayoutEffect does nothing on the server')) return;
      original(msg, ...rest);
    });
  });
  afterAll(() => spy.mockRestore());

  it.each(pages)('%s renders', (url, path, element) => {
    const html = render(url, path, element);
    expect(html).toContain('Scholarships'); // navbar link
    expect(html.length).toBeGreaterThan(1000);
  });

  it('shows the guide title for /guide/visa', () => {
    const html = render('/guide/visa', '/guide/:slug', <Guide />);
    expect(html.toLowerCase()).toContain('visa');
  });

  it('keeps search filters from the URL', () => {
    const html = render('/scholarships?q=eiffel', '/scholarships', <Scholarships />);
    expect(html).toContain('value="eiffel"');
  });
});
