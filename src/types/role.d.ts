declare module '@/types/role' {
  export interface RoleState {
    menuItems: MenuItem[];
  }

  interface MenuItem {
    label: string;
    path: string;
    icon: string;
  }
}