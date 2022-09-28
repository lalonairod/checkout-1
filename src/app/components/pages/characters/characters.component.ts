import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from '../../../services/marvel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  title : string = 'Characters';

  constructor( private marvelService : MarvelService, private router : Router) { }

  characters ?: Observable<any>;

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.characters = this.marvelService.getCharacters();
  }

  getCharacter(id : string){
    this.router.navigate(['/character/', id]);
  }

}
