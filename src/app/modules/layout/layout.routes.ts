import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '@guards/auth.guard';

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
            canActivate: [AuthGuard],
            loadChildren :() => import ('../boards/board.routes')
        },
        { 
            path:'profile', 
            canActivate: [AuthGuard],
            loadChildren :() => import ('../profile/profile.routes')
        },

        { 
            path:'users', 
            canActivate: [AuthGuard],
            loadChildren :() => import ('../users/users.routes')
        },
       
      ],
    },
  ];

export default routes;