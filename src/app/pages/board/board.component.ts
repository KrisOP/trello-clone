import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {DragDropModule, CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../models/todo.model';
import {DialogModule,Dialog, DialogRef} from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, DialogModule],
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {
  colums: Column[] =[
    {
      id:'1',
      title :'To Do',
      ToDos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        }
      ]
    },
    {
      id:'2',
      title :'Doing',
      ToDos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        }
      ]
    },
    {
      id:'3',
      title :'Done',
      ToDos: [
        {
          id: '4',
          title: 'Play video games'
        }
      ]
    }, 
    
   
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  constructor(private dialog: Dialog){}



  drop($event: CdkDragDrop<ToDo[]>){
    //el movimiento se hace en la misma columna
    if($event.previousContainer === $event.container){
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    }else{
      transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex);
    }
    moveItemInArray(this.todos, $event.previousIndex, $event.currentIndex);
  }

  addColumn(){
    this.colums.push({
      id: '4',
      title: 'New Column',
      ToDos: []
    });
  }

  deleteColumn(index: number){
    this.colums.splice(index, 1);
  }

  openDialog(todoOut:ToDo){
   const DialogRef= this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus:false,
      data: {
        todo: todoOut,
      }
    });
   DialogRef.closed.subscribe(output=>{
    console.log(output)
   })
  }
  
}
