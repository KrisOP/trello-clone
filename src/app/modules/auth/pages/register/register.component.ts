import { Component } from '@angular/core';
import { BackgroundComponent } from "../../components/background/background.component";
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    imports: [BackgroundComponent, RegisterFormComponent, FooterComponent, HeaderComponent]
})
export class RegisterComponent {

}
