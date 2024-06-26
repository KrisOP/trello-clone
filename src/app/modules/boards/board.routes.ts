import { Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';

export const routes: Routes = [
    
    {
        path: '',
        component: BoardsComponent
      },
      {
        path: ':id',
        component: BoardComponent
      },

      
];

export default routes;