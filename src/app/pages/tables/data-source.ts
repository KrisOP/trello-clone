import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { Character, RickMorty } from '../../models/rick-morty.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceCharacter extends DataSource <Character>{

    data= new BehaviorSubject<Character[]>([]);
    originalData: Character[] = [];

     connect(): Observable<Character[]> {
        return this.data;
    }
    
     disconnect() {
       
    }

    init (characters:Character[]){
        this.originalData =characters;
        this.data.next(characters);
    }

    getTotal(){
        const character = this.data.getValue();
        return character
        .map(item => item.id)
        .reduce((id, total) => id + total, 0)
    }

    // update(character: Character){
    //     const characters = this.data.getValue();
    //     const index = characters.findIndex(c => c.id === character.id);
    //     if (index !== -1) {
    //       characters[index] = character;
    //       this.data.next(characters);
    //     }
    // }
        
    update(id: Character['id'], changes: Partial<Character>) {
        const characters = this.data.getValue();
        const characterIndex = characters.findIndex(item => item.id === id); // si no encuentra el valor devuelve -1
        
        //validar cuando esta 0 en el indice, si no encuentra item devuelve -1 el index
        if (characterIndex !== -1) {
            characters[characterIndex] = {
            ...characters[characterIndex],
            ...changes,
          }
          this.data.next(characters);
        }
      }

      find(query:string){

       //const characters= this.data.getValue()
        //const newCharacter = this.originalData.filter(item=>item.name.toLowerCase().includes(query.toLowerCase()))
       

        const newCharacter = this.originalData.filter((item) => {
            const word = `${item.id}-${item.name}-${item.status}`;
            return word.toLowerCase().includes(query.toLowerCase())
        }) 

        this.data.next(newCharacter);
      }
    
    

}