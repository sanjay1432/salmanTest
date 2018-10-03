import { Injectable } from '@angular/core';
import { People } from './people';
import { Observable, of } from 'rxjs';
import { PEOPLES } from './mock-people';
@Injectable({
  providedIn: 'root'
})

export class TestService {
  constructor() { }

  getList(): Observable<People[]> {
    return of(PEOPLES);
  }

  removePeople(i): Observable<People[]> {
     PEOPLES.splice(i, 1);
     return of(PEOPLES);
  }

  updatePeople(data): Observable<People[]> {
    data.items.forEach(element => {
      PEOPLES.pop();
    });

    data.items.forEach(people => {
      PEOPLES.push(people);
    });
    return of(PEOPLES);
 }
}
