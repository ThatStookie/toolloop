import Link from 'next/link';
import { getTools } from '@/lib/data';
import { categories } from '@/lib/mock-data';
import { Icon } from '@/components/icon';
import { ToolArt } from '@/components/tool-art';
import { ToolCard } from '@/components/tool-card';
import { SearchForm } from '@/components/search-form';
export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="overline"><span className="live-dot" />GOOD TOOLS. GREAT NEIGHBOURS.</div>
          <h1>Make more.<br /><span>Own less.</span><svg viewBox="0 0 300 18" aria-hidden="true">
              <path d="M5 13Q150-5 293 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg></h1>
          <p>Your next project starts with a shared tool. Borrow what you need, lend what you have, and make something great.</p>
          <SearchForm />
          <div className="hero-hint"><Icon name="pin" size={16} /> Starting in Magdeburg <span>·</span> Built for the way we make</div>
        </div>
        <div className="hero-art" role="img" aria-label="Illustrated drill, circular saw, and garden shears on a workshop pegboard">
          <div className="pegboard">
            <div className="art-label">THE NEIGHBOURHOOD TOOLBOX</div>
            <div className="hero-drill">
              <ToolArt kind="drill" />
            </div>
            <div className="hero-saw">
              <ToolArt kind="saw" />
            </div>
            <div className="hero-shears">
              <ToolArt kind="shears" />
            </div>
            <div className="peg-shelf" />
            <div className="peg-caption">Made to be used.<br /><em>Better when shared.</em></div>
          </div>
          <span className="floating-note">
            <span className="note-icon">
              <Icon name="loop" size={24} />
            </span>
            <span>More possibilities.<strong>Less stuff.</strong></span>
          </span>
          <span className="art-star" aria-hidden="true">✳</span>
        </div>
      </div>
    </section>
    <div className="values-strip">
      <div className="container">
        <span><Icon name="wrench" />The right tool, just when you need it</span>
        <span><Icon name="loop" />Borrow with euros or credits</span>
        <span><Icon name="leaf" />Share more. Buy less.</span>
      </div>
    </div>
    <section className="container section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">A TOOL FOR EVERY IDEA</span>
          <h2>What are you working on?</h2>
        </div>
        <Link href="/explore" className="text-link">Explore all tools <Icon name="arrow" size={18} /></Link>
      </div>
      <div className="category-grid">{categories.map(category => <Link href={`/explore?category=${encodeURIComponent(category.name)}`} className="category-card" key={category.name}>
          <span className={`category-icon category-${category.icon}`}>
            <Icon name={category.icon} size={29} />
          </span>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <Icon name="arrow" size={20} className="category-arrow" />
        </Link>)}</div>
    </section>
    <section className="container section featured">
      <div className="section-heading">
        <div>
          <span className="eyebrow">READY FOR YOUR NEXT PROJECT</span>
          <h2>Good tools. Close to home.</h2>
          <p>A few finds from our demo community toolbox.</p>
        </div>
        <Link href="/explore" className="text-link">Browse the toolbox <Icon name="arrow" size={18} /></Link>
      </div>
      <div className="tool-grid">{getTools().slice(0, 4).map(tool => <ToolCard key={tool.id} tool={tool} />)}</div>
    </section>
    <section id="how-it-works" className="how-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LESS CLUTTER. MORE CREATING.</span>
            <h2>Big ideas don’t need a big toolbox.</h2>
          </div>
          <p>Just a little help from your community.</p>
        </div>
        <div className="steps-grid">{[{
            number: '01',
            icon: 'search' as const,
            title: 'Find your tool',
            text: 'Explore the toolbox and find the right equipment for your project. Check the details and availability.'
          }, {
            number: '02',
            icon: 'loop' as const,
            title: 'Borrow your way',
            text: 'The concept is simple: pay a daily price or use credits. Lending your own tools would earn credits for your next project.'
          }, {
            number: '03',
            icon: 'leaf' as const,
            title: 'Make it. Return it. Repeat.',
            text: 'In the full experience, you’ll arrange pickup with the owner, bring your idea to life, and return the tool with care.'
          }].map(step => <div className="step" key={step.number}>
            <div className="step-top">
              <span>{step.number}</span>
              <Icon name={step.icon} size={28} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>)}</div>
        <p className="demo-caption">You’re exploring a prototype. Borrow requests, payments, and credit transfers are not connected yet.</p>
      </div>
    </section>
    <section className="container section">
      <div className="project-banner">
        <div>
          <span className="eyebrow">A LITTLE INSPIRATION GOES A LONG WAY</span>
          <h2>Got the spark?<br />Let’s make something.</h2>
          <p>Beginner-friendly projects, practical steps, and the tools to get started.</p>
          <Link href="/projects" className="button">Find your next project <Icon name="arrow" size={18} /></Link>
        </div>
        <div className="shelf-art" aria-hidden="true">
          <span className="plant">✳</span>
          <span className="book book-one" />
          <span className="book book-two" />
          <span className="book book-three" />
          <span className="shelf-board" />
          <span className="shelf-bracket" />
          <span className="shelf-caption">Your next “I made that.”</span>
        </div>
      </div>
    </section>
  </>;
}
