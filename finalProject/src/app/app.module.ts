import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {BookApiService} from './services/book-api.service';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'', component:SearchtitleComponent},
  {path:'about', component:AboutComponent},
  {path: 'search', component:SearchComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SearchtitleComponent,
    AboutComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookApiService],
  bootstrap: [AppComponent]
})



export class AppModule { }
