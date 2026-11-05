import { Link } from 'react-router-dom';
export default function EmptyState({ text }) {
  return (
    <div className="card mt-6 p-10 text-center">
      <p className="font-medium text-navy-900">{text}</p>
      <p className="mt-1 text-sm text-slate-500">Try fewer filters, or <Link to="/contact" className="font-medium text-navy underline decoration-orange">tell us what you're looking for</Link>.</p>
    </div>
  );
}
