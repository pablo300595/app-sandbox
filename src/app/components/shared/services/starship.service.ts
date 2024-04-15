import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { 
  HttpClient, 
  HttpHeaders, 
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  configUrl = 'https://swapi.dev/api/starships/';
  constructor(private http: HttpClient) { }

  getNames(): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.get<any>(this.configUrl, {headers});
  }
}
