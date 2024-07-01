export const MdNavigationType = [
  'md-navigation-bar',
  'md-navigation-rail',
] as const;
export type MdNavigationType = (typeof MdNavigationType)[number];
