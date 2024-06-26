import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'boards',
          pathMatch: 'full'
        },
       
        { 
            path:'boards', 
            loadChildren :() => import ('../boards/board.routes')
        },
        { 
            path:'profile', 
            loadChildren :() => import ('../profile/profile.routes')
        },

        { 
            path:'users', 
            loadChildren :() => import ('../users/users.routes')
        },
       
      ],
    },
  ];

export default routes;