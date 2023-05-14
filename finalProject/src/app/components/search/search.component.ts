import { Component } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { IOMDBResponse2 } from 'src/app/bookResponse2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movieData : IOMDBResponse2 | any;
  currentPage = 1;
  maxPages = 0;
  errorMessage : any;

  constructor(private _omdbService:BookApiService){}


  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMoviesData(movieName,this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  getPreviousPage(movieName:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }

  getNextPage(movieName:string): boolean {
    this.currentPage++;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }

}


