import Link from 'next/link';
export default function NotFound() {
  return <div className="container empty-state">
    <span className="eyebrow">404 · MISSING FROM THE TOOLBOX</span>
    <h1>We couldn’t find that page.</h1>
    <p>There are plenty of good tools waiting to be discovered.</p>
    <Link href="/explore" className="button">Explore tools</Link>
  </div>;
}
