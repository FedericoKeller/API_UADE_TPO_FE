export interface NavItem {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  to?: string;
}
