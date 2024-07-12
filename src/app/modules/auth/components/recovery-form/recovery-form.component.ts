import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { CustomValidators } from '@utils/validators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {
  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  token:string =" "

  constructor(private formBuilder: FormBuilder, 
    private authSrv: AuthService, 
    private routeActive: ActivatedRoute,
  private router: Router) {
    this.routeActive.queryParams.subscribe(params => {
      const token = params['token'];

      if (token){
        this.token = token;

      }
      else{
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  
  }

  recovery() {
    if (this.form.valid) {
     const {newPassword} = this.form.getRawValue();
      this.status = 'loading';
      this.authSrv.changePassword(this.token, newPassword ).subscribe({
        next: () => {
          this.status = 'success';

          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err)
          this.status = 'error';
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
