import { EnumRoleEntityType, RoleEntity } from '../../../services';

export class RoleDto implements RoleEntity {
  name: string = '';
  type: EnumRoleEntityType = EnumRoleEntityType.admin;
  createdAt: Date = new Date();
  id: number = 0;
  permissions: string[] = [];
  updatedAt?: Date = new Date();
}
