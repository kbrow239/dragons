import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'

import { Dragon } from './dragon';
import { DRAGONS } from './mock-dragons';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor() { }

  getDragons() : Observable<Dragon[]> {
    return of(DRAGONS);
  }

  getDragon(id: number) : Observable<Dragon> {
    return of (DRAGONS.find(dragon => dragon.id === id));
  }
}
