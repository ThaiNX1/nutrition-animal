import { format } from 'date-fns';
import viLocale from 'date-fns/locale/vi';
import { EnumRoleEntityType } from '../services';

export const formatCurrency = (value: number): string => {
  if (isNaN(value)) value = 0;
  return Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value);
};

export const formatNumber = (value: number): string => {
  return Intl.NumberFormat('vi-VN').format(value);
};

export const formatDate = (
  date?: string | number | Date,
  formatString?: string
): string => {
  if (!date) date = new Date();
  date = new Date(date);
  if (!formatString) formatString = 'HH:mm:ss dd/MM/y';
  return format(date, formatString, { locale: viLocale });
};

export const getRoleTypeName = (type: EnumRoleEntityType | string): string => {
  switch (type) {
    case EnumRoleEntityType.admin:
      return 'Administrator';
    case EnumRoleEntityType.leader:
      return 'Trưởng nhóm';
    case EnumRoleEntityType.customer:
      return 'Khách hàng';
    case EnumRoleEntityType.partner:
      return 'Cộng tác viên';
    case EnumRoleEntityType.member:
      return 'Thành viên';
    case EnumRoleEntityType.other:
      return 'Khác';
    default:
      return '';
  }
};

export const getRouteName = (route: any): string => {
  switch (route) {
    case 'users':
      return 'Thành viên';
    case 'cdn':
      return 'Upload media';
    default:
      return '';
  }
};
