export const HubTextFieldsType = ['hub-input', 'hub-input-filled'] as const;
export type HubTextFieldsType = typeof HubTextFieldsType[number];
export const HubInputButtonTypes = ['hub-input-right-icon', 'hub-input-left-icon'] as const;
export type HubInputButtonTypes = typeof HubInputButtonTypes[number];