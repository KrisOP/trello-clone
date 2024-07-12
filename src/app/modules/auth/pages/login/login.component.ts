import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { BackgroundComponent } from "../../components/background/background.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [BtnComponent, BackgroundComponent, LoginFormComponent, HeaderComponent, FooterComponent, RouterLink]
})
export class LoginComponent {

}
