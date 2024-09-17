export const MdCardType = [
  "md-card-elevated",
  "md-card-filled",
  "md-card-outlined",
] as const;
export type MdCardType = (typeof MdCardType)[number];
