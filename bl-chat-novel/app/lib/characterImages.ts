export const CHARACTER_IMAGES: Record<string, string> = {
  '瀬川 優': '/images/characters/tohru.png',
  '木下 蒼': '/images/characters/ren.png',
};

export function getCharacterImage(name: string): string | undefined {
  return CHARACTER_IMAGES[name];
}
