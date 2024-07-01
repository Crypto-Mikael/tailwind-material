export const MdProgressType = [
  'md-linear-progress',
  'md-cicle-progress',
  'md-cicle-progress-indeterminate',
] as const;
export type MdProgressType = (typeof MdProgressType)[number];
