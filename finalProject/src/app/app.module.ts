import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {BookApiService} from './services/book-api.service';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchtitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
