export type IconName = 'search' | 'arrow' | 'loop' | 'leaf' | 'bolt' | 'wrench' | 'saw' | 'pin' | 'check' | 'clock' | 'grid' | 'user' | 'play';
const paths: Record<IconName, string> = {
  search: 'm21 21-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
  arrow: 'M4 12h16m-6-6 6 6-6 6',
  loop: 'M20 7a8 8 0 0 0-14-2L3 8m0-5v5h5M4 17a8 8 0 0 0 14 2l3-3m0 5v-5h-5',
  leaf: 'M20 3C8 2 3 8 5 15c6 7 16 1 15-12ZM4 21 15 10',
  bolt: 'm13 2-9 12h7l-1 8 10-13h-7l1-7',
  wrench: 'M14 3a6 6 0 0 0-7 8l-5 5a3 3 0 0 0 4 4l6-6a6 6 0 0 0 8-8l-4 4-4-4 2-3Z',
  saw: 'm3 16 11-11 7 7-3 3-2-2-2 4-2-2-2 4-2-2-2 3-3-4Z',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  check: 'm5 12 4 4L20 5',
  clock: 'M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
  grid: 'M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z',
  user: 'M20 21v-2a7 7 0 0 0-14 0v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  play: 'm9 5 11 7-11 7V5Z'
};
export function Icon({
  name,
  size = 20,
  className = ''
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <path d={paths[name]} />
  </svg>;
}
