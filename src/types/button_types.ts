export const HubButtonType = [
  'hub-button',
  'hub-button-elevated',
  'hub-button-filled',
  'hub-button-outlined',
  'hub-button-tonal',
  'hub-icon-button',
  'hub-icon-button-filled',
  'hub-icon-button-outlined',
  'hub-icon-button-tonal',
] as const;
export type HubButtonType = typeof HubButtonType[number];
