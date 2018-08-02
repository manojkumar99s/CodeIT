import { Injectable } from '@angular/core';
import {Hero} from  './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';


@Injectable()
export class HeroService {

    constructor(private messageService:MessageService) { }

    // getHeroes(): Hero[]{
    //   return HEROES;
    // }
    ServiceData : string;

    getHeroes(): Observable<Hero[]>
    {
        this.messageService.add('Heroservice:fetchedUser');
        return of(HEROES);
    }

    getHero(id:number):Observable<Hero>
    {
            this.messageService.add(`HeroService: Fetch hero = ${id}`);
            return of(HEROES.find(hero => hero.id === id));
    }
}
