import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

import { Dragon } from './dragon';
//import { DRAGONS } from './mock-dragons';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  private dragonUrl = "http://localhost:3000/api/dragons";

  constructor(
    private http: HttpClient
  ) { }

  getDragons() : Observable<Dragon[]> {
    return this.http.get<Dragon[]>(this.dragonUrl)
    .pipe (
      tap(_ => this.log('Fetched dragons')),
      catchError(this.handleError<Dragon[]>('getDragons', []))
    );
  }

  getDragon(id: number) : Observable<Dragon> {
    const url = `${this.dragonUrl}/${id}`;
    return this.http.get<Dragon>(url)
    .pipe(
      tap(_ => this.log(`Fetched dragon with id=${id}`)),
      catchError(this.handleError<Dragon>(`getDragon id=${id}`))
  );
  }

  addDragon (dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>(this.dragonUrl, dragon, httpOptions)
    .pipe(
      tap((dragon: Dragon) => this.log(`Added dragon w/ id=${dragon.dragonId}`)),
      catchError(this.handleError<Dragon>('addDragon'))
    );
  }

  updateDragon (dragon: Dragon): Observable<any> {
    return this.http.put(this.dragonUrl, dragon, httpOptions).pipe(
      tap(_ => this.log(`updated dragon id=${dragon.dragonId}`)),
      catchError(this.handleError<any>('updateDragon'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
