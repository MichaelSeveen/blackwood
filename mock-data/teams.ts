import { Project, projects } from './projects';
import { User, users } from './users';

export interface Team {
   id: string;
   name: string;
   icon: string;
   joined: boolean;
   color: string;
   members: User[];
   projects: Project[];
}

export const teams: Team[] = [
   {
      id: 'DESIGN',
      name: 'Design Team',
      icon: '🎨',
      joined: true,
      color: '#00FF00',
      members: [users[7], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'CLOUD',
      name: 'Cloud Infrastructure',
      icon: '☁️',
      joined: false,
      color: '#4A90E2',
      members: [users[1], users[5], users[11], users[9]],
      projects: [projects[6], projects[7]],
   },
   {
      id: 'INFO_SECURITY',
      name: 'Information Security Team',
      icon: '🔒',
      joined: false,
      color: '#2E2E2E',
      members: [users[4], users[8], users[11]],
      projects: [projects[0], projects[5], projects[8]],
   },
   {
      id: 'AI',
      name: 'AI Research',
      icon: '🧠',
      joined: true,
      color: '#9B59B6',
      members: [users[2], users[10], users[7], users[5]],
      projects: [projects[4], projects[8]],
   },
   {
      id: 'ST',
      name: 'Software Testing',
      icon: '✅',
      joined: false,
      color: '#F1C40F',
      members: [users[3], users[6], users[1]],
      projects: [projects[2], projects[3], projects[7]],
   },
   {
      id: 'DEVOPS',
      name: 'DevOps',
      icon: '⚙️',
      joined: false,
      color: '#E67E22',
      members: [users[0], users[4], users[9]],
      projects: [projects[5], projects[6]],
   },
   {
      id: 'FRONTEND',
      name: 'Frontend Engineers',
      icon: '🖥️',
      joined: false,
      color: '#1ABC9C',
      members: [users[7], users[3], users[11], users[2]],
      projects: [projects[1], projects[2]],
   },
   {
      id: 'BACKEND',
      name: 'Backend Engineers',
      icon: '🗄️',
      joined: false,
      color: '#34495E',
      members: [users[0], users[8], users[10]],
      projects: [projects[0], projects[5], projects[8]],
   },
   {
      id: 'PRODUCT',
      name: 'Product Team',
      icon: '📋',
      joined: false,
      color: '#C0392B',
      members: [users[1], users[6], users[9]],
      projects: [projects[3], projects[4]],
   },
   {
      id: 'SALES',
      name: 'Sales Team',
      icon: '📈',
      joined: false,
      color: '#7F8C8D',
      members: [users[5], users[10], users[8]],
      projects: [projects[4], projects[7]],
   },
];
