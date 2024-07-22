import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    imports: [NavbarComponent, RouterOutlet]
})
export class LayoutComponent {

    constructor( private authSrv : AuthService){

    }

    ngOnInit(){
        this.authSrv.profile().subscribe( resp => {
            console.log(resp);
        })
    }
}
