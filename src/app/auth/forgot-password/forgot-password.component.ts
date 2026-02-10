import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from 'src/app/core/auth';
import { ForgotPassword } from './forgot-password';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule]
})
export class ForgotPasswordComponent implements OnInit {

  ngOnInit() { }

  @Input() embedded: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() backToLogin = new EventEmitter<void>();

  forgotPasswordForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  emailSent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private forgotpassService: ForgotPassword
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

sendResetLink() {
  this.isLoading =  true;
  this.forgotpassService.forgotPassword(this.forgotPasswordForm.value.email).subscribe({
    next: (res) => {
      if (res.response) {
        this.successMessage = 'Reset link sent! Please check your email.';
        this.emailSent = true;
        this.isLoading = false;
      }
    },
    error: (err) => {
      this.errorMessage = err.error?.message || 'Something went wrong.';
    }
  });
}

  backToLoginPage() {
    this.backToLogin.emit();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

}
