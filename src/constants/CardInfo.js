import { v4 } from 'uuid';

const CARDINFO = [
  {
    id: v4(),
    border: '#00C8C8',
    title: 'Supervisor',
    subtitle: 'Monitors activity to identify project roadblocks',
  },
  {
    id: v4(),
    border: '#FF637B',
    title: 'Team Builder',
    subtitle:
      'Scans our talent network to create the optimal team for your project',
  },
  {
    id: v4(),
    border: '#FDBF00',
    title: 'Karma',
    subtitle: 'Regularly evaluates our talent to ensure quality',
  },
  {
    id: v4(),
    border: '#377FD2',
    title: 'Calculator',
    subtitle:
      'Uses data from past projects to provide better delivery estimates',
  },
];

export { CARDINFO };
