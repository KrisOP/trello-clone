import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from '../../../shared/components/btn/btn.component';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule],
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {

  
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: string = 'init';
  emailSent = false;
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      // TODO: Connect
    } else {
      this.form.markAllAsTouched();
    }
  }

}
