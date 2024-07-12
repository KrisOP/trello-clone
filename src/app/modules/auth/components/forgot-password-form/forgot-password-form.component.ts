import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {

  
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: RequestStatus = 'init';
  emailSent:boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService
  ) { }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      // TODO: Connect
      this.authSrv.recovery(email).subscribe({
        next: () => {
          this.status = 'success';
          this.emailSent = true;
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
