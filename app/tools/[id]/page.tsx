import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTool, getTools } from '@/lib/data';
import { ToolArt } from '@/components/tool-art';
import { BorrowRequest } from '@/components/borrow-request';
import { Icon } from '@/components/icon';
export function generateStaticParams() {
  return getTools().map(t => ({
    id: t.id
  }));
}
export async function generateMetadata({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const {
    id
  } = await params;
  return {
    title: getTool(id)?.name ?? 'Tool not found'
  };
}
export default async function ToolDetails({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const {
    id
  } = await params;
  const tool = getTool(id);
  if (!tool) notFound();
  return <div className="container page-section">
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/explore">Explore tools</Link>
      <span>/</span>
      <Link href={`/explore?category=${encodeURIComponent(tool.category)}`}>{tool.category}</Link>
      <span>/</span>
      <span>{tool.name}</span>
    </nav>
    <div className="detail-grid">
      <div>
        <div className="detail-art" style={{
          background: tool.color
        }} role="img" aria-label={`Illustration of ${tool.name}`}>
          <ToolArt kind={tool.kind} />
          <span className="illustration-label">Tool illustration · Demo listing</span>
        </div>
        <div className="detail-description">
          <span className="eyebrow">{tool.category}</span>
          <h1>{tool.name}</h1>
          <p>{tool.description}</p>
          <h2>What’s included</h2>
          <ul className="included-list">{tool.includes.map(item => <li key={item}>
              <Icon name="check" size={18} />
              {item}
            </li>)}</ul>
          <div className="owner-panel">
            <span className="avatar large">{tool.initials}</span>
            <div>
              <span className="eyebrow muted">SHARED BY</span>
              <h3>{tool.owner}</h3>
              <p>Demo owner · Magdeburg</p>
            </div>
          </div>
        </div>
      </div>
      <aside aria-label="Borrow this tool">
        <BorrowRequest tool={tool} />
      </aside>
    </div>
  </div>;
}
