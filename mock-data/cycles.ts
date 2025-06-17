export interface Cycle {
   id: string;
   number: number;
   name: string;
   teamId: string;
   startDate: string;
   endDate: string;
   progress: number;
}

export const cycles: Cycle[] = [
   {
      id: '1',
      number: 1,
      name: 'Hackathon - Design Sprint',
      teamId: 'design',
      startDate: '2025-03-10',
      endDate: '2025-03-24',
      progress: 30,
   },
   {
      id: '2',
      number: 2,
      name: 'AI Research Sprint',
      teamId: 'ai',
      startDate: '2025-03-10',
      endDate: '2025-03-24',
      progress: 50,
   },
   {
      id: '3',
      number: 3,
      name: 'Cloud Infrastructure Upgrade',
      teamId: 'cloud',
      startDate: '2025-03-10',
      endDate: '2025-03-24',
      progress: 0,
   },
];
