import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import {faCheckToSlot, faClose, faBars,faUser,faTag, faCheckSquare, faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';


interface InputData {

  todo:ToDo,

}

interface OutputData {

  resp:boolean;

}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  faClose=faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare= faCheckSquare;
  faClock= faClock;

  todo:ToDo;
constructor
(
  private dialogRef: DialogRef<OutputData>,
  @Inject (DIALOG_DATA) dataIn:InputData

){ 
  this.todo = dataIn.todo;
}

  close(){
    this.dialogRef.close();
  }

  closeWithResp(respIn:boolean){
    this.dialogRef.close({
      resp:respIn
    });
  }

}
