export const HubFabType = [
  'hub-fab-small',
  'hub-fab-small-primary',
  'hub-fab-small-secondary',
  'hub-fab-small-tertiary',
  'hub-fab',
  'hub-fab-primary',
  'hub-fab-secondary',
  'hub-fab-tertiary',
  'hub-fab-large',
  'hub-fab-large-primary',
  'hub-fab-large-secondary',
  'hub-fab-large-tertiary',
] as const;

export type HubFabType = typeof HubFabType[number];
