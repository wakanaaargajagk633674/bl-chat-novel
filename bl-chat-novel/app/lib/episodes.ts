import { episode1 } from './episode1';
import type { Episode } from './types';

export const episodes: Record<string, Episode> = {
  '1': episode1,
};

export function getEpisode(id: string): Episode | undefined {
  return episodes[id];
}
