import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeRespon } from '../interfaces/poke.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiPokeService {

  constructor( private http:HttpClient ) { }


  private serviceUrl:string = 'https://pokeapi.co/api/v2';
  public poke: string = ''



  search( a:string ){
    return this.http.get<PokeRespon>(`${this.serviceUrl}/pokemon/${a}`) 
  } 

}
