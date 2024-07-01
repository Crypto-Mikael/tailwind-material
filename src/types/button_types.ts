export const MdButtonType = [
  'md-button',
  'md-button-elevated',
  'md-button-filled',
  'md-button-outlined',
  'md-button-tonal',
  'md-icon-button',
  'md-icon-button-filled',
  'md-icon-button-outlined',
  'md-icon-button-tonal',
] as const;
export type MdButtonType = (typeof MdButtonType)[number];
