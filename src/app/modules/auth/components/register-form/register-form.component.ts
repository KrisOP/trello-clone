import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';
import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../../../shared/components/btn/btn.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, BtnComponent, CommonModule],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  formUser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });
  status: RequestStatus = 'init';

  statusUser: RequestStatus = 'init';

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showRegister = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private srvAuth: AuthService
  ) {}

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      this.srvAuth.registerAndLogin(name, email, password).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/app/boards']);
        },
        error: (error) => {
          this.status = 'error';
        console.log(error)
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }


  validateUser(){
    if(this.formUser.valid){
      this.statusUser = 'loading';
      const {email} = this.formUser.getRawValue();
      this.srvAuth.isAvailable(email).subscribe({
        next: (resp) => {
          if(resp.isAvailable){
            this.statusUser = 'success';
            this.showRegister = true;
          this.form.controls.email.setValue(email);
          
          }
          else{
            this.router.navigate(['/login'], {
              queryParams: { email }
            });
          }
       
        },
        error: (error) => {
          this.statusUser = 'error';
        }
      })
    }
    else{
      this.formUser.markAllAsTouched()
    }
    
  }
}
