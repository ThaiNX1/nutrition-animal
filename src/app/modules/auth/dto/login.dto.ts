import { EnumRoleEntityType, EnumUserEntityStatus } from '../../../services';

export class LoginDto {
  tel: string = '';
  password: string = '';
}

export class UserResponseLogin {
  tel?: string;
  roleId?: number;
  fullName?: string;
  permissions: string[] = [];
  sub?: number;
  type?: EnumRoleEntityType;
  status?: EnumUserEntityStatus;
  avatar?: string;
}
