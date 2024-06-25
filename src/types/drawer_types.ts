export const HubDrawerType = ['hub-drawer-left', 'hub-drawer-right'] as const;
export type HubDrawerType = typeof HubDrawerType[number];