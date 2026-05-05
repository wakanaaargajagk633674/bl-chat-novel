export type Speaker = 'other' | 'player' | 'narrator';

export interface Message {
  id: string;
  speaker: Speaker;
  text: string;
  characterName?: string;
}

export interface StatEffects {
  affection?: number;
  trust?: number;
  disclosure?: number;
}

export interface Choice {
  id: string;
  text: string;
  effects: StatEffects;
  nextSceneId: string;
}

export interface Scene {
  id: string;
  messages: Message[];
  choices?: Choice[];
  nextSceneId?: string;
  isEnding?: boolean;
}

export interface Episode {
  id: string;
  title: string;
  scenes: Scene[];
  firstSceneId: string;
}

export interface GameStats {
  affection: number;
  trust: number;
  disclosure: number;
}

export interface GameState {
  episodeId: string;
  currentSceneId: string;
  stats: GameStats;
  madeChoices: Record<string, string>;
  completed: boolean;
}
