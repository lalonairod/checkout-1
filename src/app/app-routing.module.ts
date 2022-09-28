import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/pages/character/character.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { ComicComponent } from './components/pages/comic/comic.component';
import { ComicsComponent } from './components/pages/comics/comics.component';
import { SerieComponent } from './components/pages/serie/serie.component';
import { SeriesComponent } from './components/pages/series/series.component';

const routes: Routes = [

  { path : 'characters', component : CharactersComponent },
  { path : 'character/:id', component : CharacterComponent },
  { path : 'comics', component : ComicsComponent },
  { path : 'comic/:id', component : ComicComponent },
  { path : 'series', component : SeriesComponent },
  { path : 'serie/:id', component : SerieComponent },

  { path : '', pathMatch : 'full', redirectTo : '/characters' },
  { path : '**', pathMatch : 'full', redirectTo : '/characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
