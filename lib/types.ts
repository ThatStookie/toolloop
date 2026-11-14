export type Category = 'Woodworking' | 'Electronics' | 'Home Repair' | 'Gardening';
export type ToolKind = 'drill' | 'saw' | 'sander' | 'solder' | 'meter' | 'pliers' | 'wrench' | 'hammer' | 'ladder' | 'shears' | 'spade' | 'washer';
export interface Tool {
  id: string;
  name: string;
  category: Category;
  kind: ToolKind;
  price: number;
  points: number;
  owner: string;
  initials: string;
  available: boolean;
  description: string;
  includes: string[];
  color: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  time: string;
  category: Category;
  toolIds: string[];
  steps: string[];
}
export interface HistoryEntry {
  toolId: string;
  activity: 'Borrowed' | 'Lent';
  date: string;
  credits: number;
}
