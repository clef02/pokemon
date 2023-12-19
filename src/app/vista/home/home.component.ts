import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ApiPokeService } from 'src/app/services/api-poke.service';

@Component({
  selector: 'app-Search',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private apipokeService: ApiPokeService){

  }

  @ViewChild('txtinput')
  tinput!:ElementRef<HTMLInputElement>;
  poke:string = '';
  name:string = '';
  expeciencies: number[] = [];


  searchP(){
    const newPoke = this.tinput.nativeElement.value;
    this.apipokeService.search(newPoke)
    this.tinput.nativeElement.value ='';

    this.apipokeService.search(newPoke).subscribe( (rep:any) => {
      this.poke = rep.sprites.other?.home.front_default;
    });


    this.apipokeService.search(newPoke).subscribe(rep => {
      this.name = rep.name;
    })


    this.apipokeService.search(newPoke).subscribe( (rep:any) => {
      this.expeciencies = rep.base_experience;
    })

    



  }


  






}
