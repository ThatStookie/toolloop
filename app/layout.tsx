import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { Icon } from '@/components/icon';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/toolloop-icon.svg' },
  title: {
    default: 'ToolLoop — Make more. Own less.',
    template: '%s | ToolLoop'
  },
  description: 'Find the right tools for your next DIY project. Explore ToolLoop, a community tool-sharing marketplace demo for MagdeHack 2026.'
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">
    <body>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <Link href="/" className="brand"><Icon name="loop" size={24} />ToolLoop.</Link>
          <p>A little less owning. A lot more doing.</p>
          <span>Made for MagdeHack 2026 <span aria-hidden="true">↗</span></span>
        </div>
        <div className="container footer-note">Community marketplace prototype · All listings, people, and credits are demo data.</div>
      </footer>
    </body>
  </html>;
}
