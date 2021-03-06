import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}
  @Get()
  call(): Observable<any> {
    // const metadata = new Metadata();
    return this.heroService.findOne();
  }
}
