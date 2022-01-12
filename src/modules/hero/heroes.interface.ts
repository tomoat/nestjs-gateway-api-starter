import { Observable } from 'rxjs';

export interface HeroesService {
  findOne(data: HeroById): Observable<Hero>;
  findMany(upstream: Observable<HeroById>): Observable<Hero>;
  findAll(): Observable<Hero[]>;
}

export interface Hero {
  id: number;
  name: string;
}

export interface HeroById {
  id: number;
}
