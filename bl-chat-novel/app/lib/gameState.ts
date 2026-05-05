import type { GameState, GameStats } from './types';

export const INITIAL_STATS: GameStats = {
  affection: 10,
  trust: 10,
  disclosure: 10,
};

export const INITIAL_STATE: GameState = {
  episodeId: '1',
  currentSceneId: 'scene-intro',
  stats: INITIAL_STATS,
  madeChoices: {},
  completed: false,
};

const STORAGE_KEY = 'bl-novel-ep1';

export function loadState(): GameState {
  if (typeof window === 'undefined') return INITIAL_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as GameState;
  } catch {
    // ignore parse errors
  }
  return INITIAL_STATE;
}

export function saveState(state: GameState): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function clearState(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
