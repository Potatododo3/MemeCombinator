import { Meme, MemeCombo, RoadmapItem, TokenInfo } from '../types/meme';

export const popularMemes: Meme[] = [
  {
    id: '1',
    name: 'Doge',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    description: 'The classic Shiba Inu that started it all'
  },
  {
    id: '2',
    name: 'Distracted Boyfriend',
    image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
    description: 'Guy checking out another girl while with his girlfriend'
  },
  {
    id: '3',
    name: 'Galaxy Brain',
    image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg',
    description: 'Expanding brain representing increasingly absurd ideas'
  },
  {
    id: '4',
    name: 'Pepe the Frog',
    image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
    description: 'The iconic frog character with many variations'
  },
  {
    id: '5',
    name: 'Wojak',
    image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg',
    description: 'The feels guy and his many emotional states'
  },
  {
    id: '6',
    name: 'Stonks',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
    description: 'Man in suit with rising stocks graph'
  }
];

export const featuredCombos: MemeCombo[] = [
  {
    id: 'combo1',
    name: 'DogeStonks',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
    description: 'To the moon! Such profit!',
    parent1: '1',
    parent2: '6',
    votes: 420,
    creator: 'mememaster',
    createdAt: '2025-04-20'
  },
  {
    id: 'combo2',
    name: 'Galaxy Pepe',
    image: 'https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg',
    description: 'When your brain is so big it becomes amphibian',
    parent1: '3',
    parent2: '4',
    votes: 69,
    creator: 'pepewhisperer',
    createdAt: '2025-04-19'
  },
  {
    id: 'combo3',
    name: 'Distracted Wojak',
    image: 'https://images.pexels.com/photos/7210235/pexels-photo-7210235.jpeg',
    description: 'When you feel too much while looking at someone else',
    parent1: '2',
    parent2: '5',
    votes: 169,
    creator: 'memeninja',
    createdAt: '2025-04-18'
  }
];

export const roadmapItems: RoadmapItem[] = [
  {
    icon: '🚀',
    title: 'Launch the Lab',
    description: 'Initial release of MemeCombiner with basic fusion functionality',
    completed: true
  },
  {
    icon: '🧬',
    title: 'Create 1000 MemeCombos',
    description: 'Reach 1000 unique meme combinations created by the community',
    completed: false
  },
  {
    icon: '💰',
    title: 'Token Airdrop to Top Creators',
    description: 'Reward the most active and popular meme creators with tokens',
    completed: false
  },
  {
    icon: '🧠',
    title: 'AI Meme Generator V2',
    description: 'Launch advanced AI-powered meme generation and combination',
    completed: false
  }
];

export const tokenInfo: TokenInfo[] = [
  {
    name: 'Community Pool',
    icon: '👥',
    description: 'Allocated for community activities and governance',
    percentage: 40
  },
  {
    name: 'Development',
    icon: '👨‍💻',
    description: 'Future development and maintenance',
    percentage: 25
  },
  {
    name: 'Team',
    icon: '🚀',
    description: 'Core team allocation',
    percentage: 15
  },
  {
    name: 'Marketing',
    icon: '📣',
    description: 'Promotion and partnerships',
    percentage: 20
  }
];