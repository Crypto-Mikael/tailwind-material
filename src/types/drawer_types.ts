export const MdDrawerType = ['md-drawer-left', 'md-drawer-right'] as const;
export type MdDrawerType = (typeof MdDrawerType)[number];
