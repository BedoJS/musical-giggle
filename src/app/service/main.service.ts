import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  login(username: string, password: string): Observable<string> {
    return of('test-user-token');
  }
}
