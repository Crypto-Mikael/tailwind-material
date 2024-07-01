export const MdTextFieldsType = ['md-input', 'md-input-filled'] as const;
export type MdTextFieldsType = (typeof MdTextFieldsType)[number];
export const MdInputButtonTypes = [
  'md-input-right-icon',
  'md-input-left-icon',
] as const;
export type MdInputButtonTypes = (typeof MdInputButtonTypes)[number];
