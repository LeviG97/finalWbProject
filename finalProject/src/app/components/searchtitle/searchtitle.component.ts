import { Component } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { IOMDBResponse } from 'src/app/bookResponse';

@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {

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
  