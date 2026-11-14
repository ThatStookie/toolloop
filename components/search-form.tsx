import { Icon } from './icon';
export function SearchForm() {
  return <form action="/explore" className="hero-search" role="search">
    <Icon name="search" size={22} />
    <label className="sr-only" htmlFor="home-search">Search for a tool</label>
    <input id="home-search" name="q" placeholder="What do you want to make?" type="search" />
    <button type="submit" className="button">Find a tool <Icon name="arrow" size={18} /></button>
  </form>;
}
