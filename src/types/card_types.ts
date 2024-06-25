export const HubCardType = ['hub-card-elevated', 'hub-card-filled', 'hub-card-outlined'] as const;
export type HubCardType = typeof HubCardType[number];