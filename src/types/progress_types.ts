export const HubProgressType = ['hub-linear-progress', 'hub-cicle-progress', 'hub-cicle-progress-indeterminate'] as const;
export type HubProgressType = typeof HubProgressType[number];