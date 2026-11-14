'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './icon';
export function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" aria-label="ToolLoop home"><span className="brand-mark">
          <Icon name="loop" size={25} />
        </span>ToolLoop<span className="brand-dot">.</span></Link>
      <nav aria-label="Main navigation">
        {[['/explore', 'Explore tools'], ['/projects', 'DIY projects']].map(([href, label]) => <Link key={href} href={href} className={pathname.startsWith(href) ? 'active' : ''} aria-current={pathname.startsWith(href) ? 'page' : undefined}>{label}</Link>)}
        <Link href="/#how-it-works">How it works</Link>
      </nav>
      <Link href="/profile" className="profile-link" aria-current={pathname === '/profile' ? 'page' : undefined}>
        <span className="avatar">AM</span>
        <span>My profile</span>
      </Link>
    </div>
  </header>;
}
