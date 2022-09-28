import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { CharacterComponent } from './components/pages/character/character.component';
import { ComicsComponent } from './components/pages/comics/comics.component';
import { ComicComponent } from './components/pages/comic/comic.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SeriesComponent } from './components/pages/series/series.component';
import { SerieComponent } from './components/pages/serie/serie.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,
    NavbarComponent,
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
