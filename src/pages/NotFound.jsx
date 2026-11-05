import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="container-x py-28 text-center">
      <p className="font-display text-6xl font-extrabold text-orange">404</p>
      <h1 className="mt-3 text-2xl font-bold">This page took a wrong train.</h1>
      <p className="mt-2 text-slate-500">Let's get you back on track.</p>
      <Link to="/" className="btn-navy mt-6">Go home</Link>
    </div>
  );
}
