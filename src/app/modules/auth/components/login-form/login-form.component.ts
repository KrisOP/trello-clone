
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { CommonModule } from '@angular/common';
import { RequestStatus } from '@models/request-status.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: RequestStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
     private srvAuth: AuthService, 
     private route: ActivatedRoute
  ) { 
    this.route.queryParamMap.subscribe(params => {

      const email = params.get('email');
      
      if (email){
        this.form.controls.email.setValue(email);
      }

      }  )
    }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
      this.srvAuth.login(email, password).subscribe({
        next: ()=>{
          this.status = 'success';
          this.router.navigate(['/app']);
        },
        error: (err)=>{
     
          console.log(err);
          this.status = 'error';
        }
      });
    
    } else {
      this.form.markAllAsTouched();
    }
  }
}
