export interface IMenuItemDTO {
  label?: string;
  path?: string;
  icon?: JSX.Element;
  isActive?: boolean;
  position?: 'left' | 'right';
  dot?: boolean;
  loadFromSession?: boolean;
}
