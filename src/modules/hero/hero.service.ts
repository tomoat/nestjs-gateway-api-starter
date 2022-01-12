import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Hero, HeroesService } from './heroes.interface';

@Injectable()
export class HeroService implements OnModuleInit {
  private heroesService: HeroesService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroService');
  }

  findOne(): Observable<Hero> {
    return this.heroesService.findOne({ id: 1 });
  }

  findAll(): Observable<Hero[]> {
    return this.heroesService.findAll();
  }
}
