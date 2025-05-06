export interface Meme {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface MemeCombo {
  id: string;
  name: string;
  image: string;
  description: string;
  parent1: string;
  parent2: string;
  votes: number;
  creator: string;
  createdAt: string;
}

export interface RoadmapItem {
  icon: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface TokenInfo {
  name: string;
  icon: string;
  description: string;
  percentage: number;
}