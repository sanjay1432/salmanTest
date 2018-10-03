import { Injectable } from '@angular/core';
import { People } from './people';
import { Observable, of } from 'rxjs';
import { PEOPLES } from './mock-people';
// const people = ["Jay Leno","Craig Ferguson","Conan O'Brien","David Letterman"]
@Injectable({
  providedIn: 'root'
})

export class TestService {
  constructor() { }

  getList(): Observable<People[]> {
    return of(PEOPLES);
  }
}
