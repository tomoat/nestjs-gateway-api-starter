import { Observable } from 'rxjs';

export interface UsersService {
  findOne(data: UserById): Observable<User>;
  findMany(upstream: Observable<UserById>): Observable<User>;
}

export interface User {
  id: number;
  name: string;
}

export interface UserById {
  id: number;
}
