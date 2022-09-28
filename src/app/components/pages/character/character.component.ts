import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../../services/marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  title : string = 'Name';
  idCharacter : string = '';
  character : any = {};
  characterDesc = '';

  constructor( private marvelService : MarvelService, private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe( params => {
      this.idCharacter = params['id'];
    });
  }

  ngOnInit() {
    this.getIdCharacter();
  }

  getIdCharacter(){
    this.marvelService.getCharacter(this.idCharacter).subscribe({
      next : (res) => {
        let dataCharacter = {
          name : res[0].name,
          description : res[0].description,
          thumbnailPath : res[0].thumbnail.path,
          thumbnailExtension : res[0].thumbnail.extension,
          modified : res[0].modified,
          urls : res[0].urls[0].url
        }
        this.character = dataCharacter;
        console.log(this.character);

        if(this.character.description === ''){

          this.characterDesc = 'No Description';

        } else{
          this.characterDesc = this.character.description;
        }
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

}
