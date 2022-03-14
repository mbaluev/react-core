export interface IMenuItem {
  id: string;
  type: 'link' | 'separator';
  label?: string;
  path?: string;
  icon?: JSX.Element;
  isActive?: boolean;
}
