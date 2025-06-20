import { Status, status } from './status';
import {
   Accessibility,
   Bell,
   Blocks,
   Bomb,
   BrickWall,
   Cuboid,
   FormInput,
   Globe,
   Grid2X2,
   HelpCircle,
   LayoutDashboard,
   Loader,
   Lock,
   LucideIcon,
   Play,
   Settings,
   Shapes,
   Table,
   TrafficCone,
   Vault,
   Wallpaper,
} from 'lucide-react';
import { RemixiconComponentType } from '@remixicon/react';
import { User, users } from './users';
import { Priority, priorities } from './priorities';
export interface Project {
   id: string;
   name: string;
   status: Status;
   icon: LucideIcon | RemixiconComponentType;
   percentComplete: number;
   startDate: string;
   lead: User;
   priority: Priority;
   health: Health;
}

interface Health {
   id: 'no-update' | 'off-track' | 'on-track' | 'at-risk';
   name: string;
   color: string;
   description: string;
}

export const health: Health[] = [
   {
      id: 'no-update',
      name: 'No Update',
      color: '#FF0000',
      description: 'The project has not been updated in the last 30 days.',
   },
   {
      id: 'off-track',
      name: 'Off Track',
      color: '#FF0000',
      description: 'The project is not on track and may be delayed.',
   },
   {
      id: 'on-track',
      name: 'On Track',
      color: '#00FF00',
      description: 'The project is on track and on schedule.',
   },
   {
      id: 'at-risk',
      name: 'At Risk',
      color: '#FF0000',
      description: 'The project is at risk and may be delayed.',
   },
];

export const projects: Project[] = [
   {
      id: '1',
      name: 'Core Components',
      status: status[0],
      icon: Cuboid,
      percentComplete: 80,
      startDate: '2025-03-08',
      lead: users[2],
      priority: priorities[1],
      health: health[0],
   },
   {
      id: '2',
      name: 'Theming',
      status: status[1],
      icon: Blocks,
      percentComplete: 50,
      startDate: '2025-03-14',
      lead: users[0],
      priority: priorities[0],
      health: health[3],
   },
   {
      id: '3',
      name: 'Modals',
      status: status[2],
      icon: Vault,
      percentComplete: 0,
      startDate: '2025-03-09',
      lead: users[1],
      priority: priorities[2],
      health: health[1],
   },
   {
      id: '4',
      name: 'Navigation',
      status: status[3],
      icon: BrickWall,
      percentComplete: 0,
      startDate: '2025-03-10',
      lead: users[2],
      priority: priorities[0],
      health: health[2],
   },
   {
      id: '5',
      name: 'Layout',
      status: status[4],
      icon: Wallpaper,
      percentComplete: 0,
      startDate: '2025-03-11',
      lead: users[0],
      priority: priorities[0],
      health: health[3],
   },
   {
      id: '6',
      name: 'Sidebar',
      status: status[5],
      icon: TrafficCone,
      percentComplete: 0,
      startDate: '2025-03-12',
      lead: users[1],
      priority: priorities[0],
      health: health[1],
   },
   {
      id: '7',
      name: 'Cards',
      status: status[1],
      icon: Grid2X2,
      percentComplete: 0,
      startDate: '2025-03-13',
      lead: users[2],
      priority: priorities[0],
      health: health[2],
   },
   {
      id: '8',
      name: 'Tooltip',
      status: status[2],
      icon: Bomb,
      percentComplete: 0,
      startDate: '2025-03-14',
      lead: users[0],
      priority: priorities[0],
      health: health[3],
   },
   {
      id: '9',
      name: 'Dropdown',
      status: status[3],
      icon: Shapes,
      percentComplete: 50,
      startDate: '2025-03-15',
      lead: users[1],
      priority: priorities[0],
      health: health[3],
   },
   {
      id: '10',
      name: 'Data Tables',
      status: status[0],
      icon: Table,
      percentComplete: 65,
      startDate: '2025-03-18',
      lead: users[2],
      priority: priorities[1],
      health: health[0],
   },
   {
      id: '11',
      name: 'Form Controls',
      status: status[2],
      icon: FormInput,
      percentComplete: 30,
      startDate: '2025-03-19',
      lead: users[0],
      priority: priorities[1],
      health: health[2],
   },
   {
      id: '12',
      name: 'Notifications',
      status: status[1],
      icon: Bell,
      percentComplete: 45,
      startDate: '2025-03-20',
      lead: users[1],
      priority: priorities[0],
      health: health[1],
   },
   {
      id: '13',
      name: 'Authentication Flow',
      status: status[0],
      icon: Lock,
      percentComplete: 75,
      startDate: '2025-03-05',
      lead: users[2],
      priority: priorities[0],
      health: health[0],
   },
   {
      id: '14',
      name: 'User Preferences',
      status: status[3],
      icon: Settings,
      percentComplete: 10,
      startDate: '2025-03-22',
      lead: users[0],
      priority: priorities[2],
      health: health[2],
   },
   {
      id: '15',
      name: 'Dashboard Widgets',
      status: status[1],
      icon: LayoutDashboard,
      percentComplete: 55,
      startDate: '2025-03-17',
      lead: users[1],
      priority: priorities[1],
      health: health[0],
   },
   {
      id: '16',
      name: 'Onboarding Guide',
      status: status[2],
      icon: HelpCircle,
      percentComplete: 25,
      startDate: '2025-03-24',
      lead: users[2],
      priority: priorities[1],
      health: health[3],
   },
   {
      id: '17',
      name: 'Progress Indicators',
      status: status[4],
      icon: Loader,
      percentComplete: 40,
      startDate: '2025-03-16',
      lead: users[0],
      priority: priorities[0],
      health: health[1],
   },
   {
      id: '18',
      name: 'Internationalization',
      status: status[5],
      icon: Globe,
      percentComplete: 15,
      startDate: '2025-03-25',
      lead: users[1],
      priority: priorities[2],
      health: health[2],
   },
   {
      id: '19',
      name: 'Accessibility Features',
      status: status[0],
      icon: Accessibility,
      percentComplete: 60,
      startDate: '2025-03-21',
      lead: users[2],
      priority: priorities[0],
      health: health[0],
   },
   {
      id: '20',
      name: 'Media Player',
      status: status[3],
      icon: Play,
      percentComplete: 20,
      startDate: '2025-03-26',
      lead: users[0],
      priority: priorities[1],
      health: health[3],
   },
];
