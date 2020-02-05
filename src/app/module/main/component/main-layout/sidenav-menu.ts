export class Menu {
  title: string;
  icon: string;
  link: string;
}

export const MENU_ITEMS: Array<Menu> = [
  {title: 'Dashboard', icon: 'dashboard', link: '/main/dashboard'},
  {title: 'Category', icon: 'category', link: '/main/category'},
  {title: 'Payment Method', icon: 'payment', link: '/main/payment-method'},
  {title: 'Status', icon: 'flag', link: '/main/expense-status'},
  {title: 'Transaction', icon: 'track_changes', link: '/main/transaction'},
];
