import {Role} from '@core/role.model';

export interface User {
  mobile: number;
  firstName: string;
  familyName?: string;
  email?: string;
  dni?: string;
  address?: string;
  password?: string;
  role?: Role;
  active?: boolean;
  registrationDate?: Date;
}
