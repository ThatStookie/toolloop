import { Suspense } from 'react';
import { Explorer } from '@/components/explorer';
import { getTools } from '@/lib/data';
import { categories } from '@/lib/mock-data';
export const metadata = {
  title: 'Explore tools'
};
async function Results({
  searchParams
}: {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === 'string' ? params.q : '';
  const category = categories.some(c => c.name === params.category) ? params.category! : '';
  return <Explorer key={`${query}-${category}`} tools={getTools()} initialQuery={query} initialCategory={category} />;
}
export default function Explore({
  searchParams
}: {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
}) {
  return <div className="container page-section">
    <div className="page-heading">
      <span className="eyebrow">THE COMMUNITY TOOLBOX</span>
      <h1>Find your next project partner.</h1>
      <p>Good tools are meant to be used. Discover something for your next big idea.</p>
    </div>
    <Suspense fallback={<p className="notice">Opening the toolbox…</p>}>
      <Results searchParams={searchParams} />
    </Suspense>
    <p className="demo-caption">Demo marketplace · Sample owners and availability · Local illustrations</p>
  </div>;
}
