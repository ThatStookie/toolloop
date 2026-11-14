// Replace this read-only adapter with Supabase queries when a backend is introduced.
// UI components consume these functions rather than importing mock records directly.
import { tools, projects, demoProfile, history } from './mock-data';
export const getTools = () => tools;
export const getTool = (id: string) => tools.find(tool => tool.id === id);
export const getProjects = () => projects;
export const getDemoProfile = () => demoProfile;
export const getDemoHistory = () => history;
