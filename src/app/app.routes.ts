import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { BoardsComponent } from './modules/boards/pages/boards/boards.component';
import { BoardComponent } from './modules/boards/pages/board/board.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TablesComponent } from './pages/tables/tables.component';
import { AuthGuard } from '@guards/auth.guard';
import { redirectGuard } from '@guards/redirect.guard';

export const routes: Routes = [
// Suggested code may be subject to a license. Learn more: ~LicenseLog:170395205.
     { path:'', canActivate: [redirectGuard], loadChildren :() => import ('./modules/auth/auth.routes')},
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3735305821.
     { path:'app', canActivate: [AuthGuard], loadChildren :() => import ('./modules/layout/layout.routes')},

    //  { path:'', component: BoardsComponent },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'boards',
    //     component: BoardsComponent
    // },
    // {
    //     path: 'board',
    //     component: BoardComponent
    // },
    // {
    //     path: 'scroll',
    //     component: ScrollComponent
    // },
    // {
    //     path: 'table',
    //     component: TablesComponent
    // }

    // {
    //     path: '',
    //     loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    //   },
    //   {
    //     path: 'app',
    //     loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    //   },

];
