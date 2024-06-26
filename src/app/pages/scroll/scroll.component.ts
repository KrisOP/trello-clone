import { Component } from '@angular/core';
import { NavbarComponent } from '../../modules/layout/components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { RickMorty } from '../../models/rick-morty.model';

interface Product {
  
    id: string,
    title: string,
    images: string[],
    image:string,
    price: number,
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, ScrollingModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {

  products : Product[]=[];
apiResponse: RickMorty = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: []
};


  constructor ( private http : HttpClient){
     
  }

  ngOnInit(){
    this.http.get<RickMorty>('https://rickandmortyapi.com/api/character').subscribe(resp=>{
      console.log(resp);
      this.apiResponse = resp;
      console.log 
    });

    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(resp=>{
      console.log(resp);
      this.products = resp;
      console.log(this.products)
    });
  }

  
}
