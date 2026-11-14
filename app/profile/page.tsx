import Link from 'next/link';
import { getDemoProfile, getDemoHistory, getTool } from '@/lib/data';
import { ToolCard } from '@/components/tool-card';
import { Icon } from '@/components/icon';
export const metadata = {
  title: 'Demo profile'
};
export default function Profile() {
  const profile = getDemoProfile();
  return <div className="container page-section">
    <div className="notice">
      <Icon name="user" />
      <span><strong>You’re viewing a demo profile.</strong> This sample account, balance, tools, and activity are fictional. No sign-in is connected.</span>
    </div>
    <div className="profile-heading">
      <span className="avatar profile-avatar">{profile.initials}</span>
      <div>
        <span className="eyebrow">YOUR CORNER OF THE COMMUNITY</span>
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <span className="location">
          <Icon name="pin" size={16} />
          {profile.location}
        </span>
      </div>
    </div>
    <div className="profile-layout">
      <section className="credit-card">
        <span className="eyebrow">DEMO CREDITS BALANCE</span>
        <div className="credit-number">
          <Icon name="loop" size={36} />
          {profile.credits}
        </div>
        <p>Little tools. Lots of possibilities.</p>
        <hr />
        <p>In the planned credit system, sharing tools earns credits you can use to borrow from others.</p>
        <Link href="/explore" className="button light">Explore the toolbox <Icon name="arrow" size={18} /></Link>
        <small>Sample balance only. No credit updates or transfers.</small>
      </section>
      <section className="history-panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A LITTLE GIVE AND TAKE</span>
            <h2>Recent activity</h2>
          </div>
          <span className="demo-badge">Demo history</span>
        </div>
        <ul className="history-list">{getDemoHistory().map((entry, i) => {
            const tool = getTool(entry.toolId)!;
            return <li key={i}>
            <span className={`history-icon ${entry.activity === 'Lent' ? 'lent' : ''}`}>
              <Icon name="loop" />
            </span>
            <div>
              <Link href={`/tools/${tool.id}`}>{tool.name}</Link>
              <p>{entry.activity} · {new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    timeZone: 'UTC'
                  }).format(new Date(entry.date))}</p>
            </div>
            <strong className={entry.credits > 0 ? 'positive' : ''}>
              {entry.credits > 0 ? '+' : '−'}
              {Math.abs(entry.credits)}
              <small>credits</small>
            </strong>
          </li>;
          })}</ul>
      </section>
    </div>
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">READY TO BE SHARED</span>
          <h2>My toolbox</h2>
        </div>
        <span className="muted">{profile.ownedToolIds.length} demo listings</span>
      </div>
      <div className="tool-grid">{profile.ownedToolIds.map(id => <ToolCard key={id} tool={getTool(id)!} />)}</div>
    </section>
  </div>;
}
