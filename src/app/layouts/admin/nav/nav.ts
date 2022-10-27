export const navItems: INavData[] = [
  {
    name: 'Tổng quan',
    url: '/dashboard',
    icon: 'home',
  },
  {
    name: 'Thành viên',
    url: '/user',
    icon: 'team',
  },
  {
    name: 'Cài đặt',
    url: '',
    icon: 'setting',
    children: [
      {
        name: 'Nhóm quyền',
        url: '/setting/role',
        icon: '',
      },
      {
        name: 'Phân quyền',
        url: '/setting/permission',
        icon: '',
      },
    ],
  },
];

export interface INavData {
  name: string;
  url?: string;
  icon: string;
  visible?: boolean;
  key?: string;
  children?: INavData[];
}
