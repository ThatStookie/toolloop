'use client';

import { useState } from 'react';
import type { Tool } from '@/lib/types';
import { categories } from '@/lib/mock-data';
import { ToolCard } from './tool-card';
import { Icon } from './icon';
export function Explorer({
  tools,
  initialQuery,
  initialCategory
}: {
  tools: Tool[];
  initialQuery: string;
  initialCategory: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sort, setSort] = useState('featured');
  const [maxPrice, setMaxPrice] = useState('');
  const filtered = tools.filter(t => (!category || t.category === category) && (!availableOnly || t.available) && (!maxPrice || t.price <= Number(maxPrice)) && `${t.name} ${t.category} ${t.description} ${t.owner}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : sort === 'credits' ? a.points - b.points : 0);
  function reset() {
    setQuery('');
    setCategory('');
    setAvailableOnly(false);
    setMaxPrice('');
    setSort('featured');
  }
  return <>
    <div className="filter-bar">
      <div className="search-field">
        <Icon name="search" />
        <label className="sr-only" htmlFor="tool-search">Search tools</label>
        <input id="tool-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search tools or owners…" />
      </div>
      <label className="filter-label">Daily budget<select value={maxPrice} onChange={e => setMaxPrice(e.target.value)}>
          <option value="">Any price</option>
          <option value="5">Up to €5</option>
          <option value="10">Up to €10</option>
          <option value="15">Up to €15</option>
        </select></label>
      <label className="check-filter"><input type="checkbox" checked={availableOnly} onChange={e => setAvailableOnly(e.target.checked)} />Available now</label>
    </div>
    <div className="filter-categories" aria-label="Filter by category">{['', ...categories.map(c => c.name)].map(c => <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c} className={`filter-chip ${category === c ? 'selected' : ''}`}>{c || 'All tools'}</button>)}</div>
    <div className="results-heading">
      <p role="status"><strong>{filtered.length}</strong> {filtered.length === 1 ? 'tool' : 'tools'} in the demo toolbox</p>
      <label>Sort by <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
          <option value="credits">Credits: low to high</option>
        </select></label>
    </div>
    {filtered.length ? <div className="tool-grid">{filtered.map(t => <ToolCard key={t.id} tool={t} />)}</div> : <div className="empty-state">
      <Icon name="search" size={36} />
      <h2>No tools found</h2>
      <p>Try a broader search or change your filters.</p>
      <button className="button" onClick={reset}>Reset all filters</button>
    </div>}
  </>;
}
