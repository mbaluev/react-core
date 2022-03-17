export interface IMenuItemDTO {
  id: string;
  type: 'link' | 'separator';
  label?: string;
  path?: string;
  icon?: JSX.Element;
  isActive?: boolean;
}
