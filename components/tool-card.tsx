import Link from 'next/link';
import type { Tool } from '@/lib/types';
import { ToolArt } from './tool-art';
import { Icon } from './icon';
export function ToolCard({
  tool
}: {
  tool: Tool;
}) {
  return <article className="tool-card">
    <Link className="tool-image" href={`/tools/${tool.id}`} style={{
      background: tool.color
    }} aria-label={`View ${tool.name}, ${tool.available ? 'available' : 'currently on loan'}`}>
      <ToolArt kind={tool.kind} />
      <span className={`availability ${tool.available ? '' : 'unavailable'}`}>
        <span />
        {tool.available ? 'Available' : 'On loan'}
      </span>
      <span className="image-arrow">
        <Icon name="arrow" size={17} />
      </span>
    </Link>
    <div className="tool-body">
      <span className="eyebrow muted">{tool.category}</span>
      <h3>
        <Link href={`/tools/${tool.id}`}>{tool.name}</Link>
      </h3>
      <div className="tool-price">
        <strong>€{tool.price}<span> / day</span></strong>
        <span className="points"><Icon name="loop" size={14} />{tool.points} credits<span className="sr-only"> per day</span></span>
      </div>
      <div className="tool-owner">
        <span className="avatar small">{tool.initials}</span>
        <span>{tool.owner}</span>
        <span className="owner-location">Magdeburg</span>
      </div>
    </div>
  </article>;
}
