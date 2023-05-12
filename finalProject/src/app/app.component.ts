import { Component } from '@angular/core';
import { IOMDBResponse } from './bookResponse';
import { BookApiService } from './services/book-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalProject';
  movieData:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:BookApiService){}

  getMovieDetails(movieName:string): boolean{
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }
  
}
