import { User } from './user.interface';

export interface AuthenticatedUser {
  user: User;
  token: string;
}
