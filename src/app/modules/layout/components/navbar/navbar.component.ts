import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBell, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '@services/token.service';
import { Router, RouterLink} from '@angular/router';
import { User } from '@models/user.model';
import { AuthService } from '@services/auth.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule,FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html'
})


export class NavbarComponent {
  isOpen=false;
  isOpenBody=false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  //observable
  user=this.autSrv.user$;

  constructor( private tokenSrv: TokenService,
     private router: Router,
      private autSrv: AuthService){

  }

  ngOnInit(){
    // this.autSrv.profile().subscribe( resp => {
    //   this.user = resp;
    //   console.log(resp);

    // })
  }

  logOut(){
    this.tokenSrv.removeToken();
    this.router.navigate(['/login']);
  }

  isValidToken(){

    console.log(this.tokenSrv.isValidToken());

  }
}
