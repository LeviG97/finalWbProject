import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IOMDBResponse } from '../bookResponse';
import { IOMDBResponse2 } from '../bookResponse2';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  private _siteURL="https://www.omdbapi.com/"
  private _key="?apikey=b6a4a20a&t="
  private _key2="?apikey=b6a4a20a&s="
  constructor(private _http:HttpClient) { }

  getMovieData(movieName:string):Observable<IOMDBResponse>{
    return this._http.get<IOMDBResponse>(this._siteURL + this._key + movieName)
    .pipe(
      tap(data=> console.log('Moviedata/error' +JSON.stringify(data)
      )),
      catchError(this.handleError)
    );
  }
  private handleError(err:HttpErrorResponse){
    console.log('OmdbApiService:' + err.message);
    return throwError(() => new Error("OmdbApiService:" + err.message))
  }

  getMoviesData(movieName:string, page:number):Observable<IOMDBResponse2> {
    return this._http.get<IOMDBResponse2>(this._siteURL+ this._key2 + movieName + "&page=" + page)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
}
