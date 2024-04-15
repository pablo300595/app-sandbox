import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { AuthDTO } from '../models/auth.dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({ email, password}: AuthDTO): Observable<AuthDTO> {
    return of({
      email,
      password
    }).pipe(delay(3000))
  }
}
