import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBell, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '@services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule,FontAwesomeModule],
  templateUrl: './navbar.component.html'
})


export class NavbarComponent {
  isOpen=false;
  isOpenBody=false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  constructor( private tokenSrv: TokenService, private router: Router){

  }


  logOut(){
    this.tokenSrv.removeToken();
    this.router.navigate(['/login']);
  }
}
