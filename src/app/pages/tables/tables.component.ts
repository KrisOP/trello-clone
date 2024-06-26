import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Character, RickMorty } from '../../models/rick-morty.model';
import { NavbarComponent } from '../../modules/layout/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DataSourceCharacter } from './data-source';
import { BtnComponent } from '../../modules/shared/components/btn/btn.component';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CdkTableModule,HttpClientModule, NavbarComponent, CommonModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './tables.component.html'
})
export class TablesComponent {

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2486288030.
  charactersDataSource: DataSourceCharacter = new DataSourceCharacter();
  mesa:string ='';
  apiResponse: RickMorty = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: []
  };

  total: number = 0;
  totalDataSource: number = 0;

  input=new FormControl('',{nonNullable:true})

  columns:string [] = ['id', 'name', 'status', 'species', 'image','actions'];
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.charactersDataSource = new DataSourceCharacter();

    this.http.get<RickMorty>('https://rickandmortyapi.com/api/character').subscribe(resp=>{
      console.log(resp);
      //caputara la respuesta de la api
      this.apiResponse = resp;
      //capturar la respuesta de la api e iniciar a un datasource
      this.charactersDataSource.init(this.apiResponse.results);
      //obtener el total
      this.total = this.apiResponse.results
        .map(item => item.id)
        .reduce((id, total) => id + total, 0);
      this.totalDataSource = this.charactersDataSource.getTotal()
    });

    this.input.valueChanges
    .pipe(debounceTime(300))
    .subscribe(value=>{
      this.charactersDataSource.find(value)
    })
  }

  update(character:Character){

    //actualizar de manera reactiva
  if(character.species === 'Human'){
    this.charactersDataSource.update(character.id, {species:'Alien'});
  }
  else{
    this.charactersDataSource.update(character.id, {species:'Human'});
  }

  }

  
}
