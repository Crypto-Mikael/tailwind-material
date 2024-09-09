export const MdFabType = [
  "md-fab-small",
  "md-fab-small-primary",
  "md-fab-small-secondary",
  "md-fab-small-tertiary",
  "md-fab",
  "md-fab-primary",
  "md-fab-secondary",
  "md-fab-tertiary",
  "md-fab-large",
  "md-fab-large-primary",
  "md-fab-large-secondary",
  "md-fab-large-tertiary",
] as const;

export type MdFabType = (typeof MdFabType)[number];
