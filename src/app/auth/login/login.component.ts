import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Auth } from 'src/app/core/auth';
import { Login } from './login';

interface LoginFormModel {
  email: FormControl<string>;
  password: FormControl<string>;
  rememberMe: FormControl<boolean>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  @Input() embedded = false;
  @Output() authSuccess = new EventEmitter<{ success: boolean; token: string }>();
  @Output() cancel = new EventEmitter<void>();
  @Output() switchToRegisterRequested = new EventEmitter<void>();
  @Output() forgotPasswordRequested = new EventEmitter<void>();

  loginForm = new FormGroup<LoginFormModel>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true }),
  });

  isLoading = false;
  errorMessage = '';
  showPassword = false;
  successMessage = '';
  showForgotPassword = false;

  constructor(
    private loginService: Login,
    private authService: Auth,
  ) {}

  ngOnInit() {
    this.restoreRememberedUser();
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: (res: any) => {
        this.isLoading = false;

        if (res.response === true && res.token) {
          this.persistRememberedUserIfNeeded(res.token);
          this.successMessage = 'Login successful! Redirecting...';

          setTimeout(() => {
            this.successMessage = '';
            this.authService.loginSuccess(res.token);
            this.authSuccess.emit({ success: true, token: res.token });
          }, 2000);
          return;
        }

        this.errorMessage = 'Unexpected login response. Please try again.';
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.successMessage = '';
      },
    });
  }

  closeModal() {
    this.cancel.emit();
  }

  switchToRegister() {
    this.switchToRegisterRequested.emit();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  openForgotPassword() {
    this.forgotPasswordRequested.emit();
  }

  closeForgotPassword() {
    this.showForgotPassword = false;
  }

  handleBackToLogin() {
    this.showForgotPassword = false;
  }

  private restoreRememberedUser(): void {
    const savedUser = localStorage.getItem('userData');
    if (!savedUser) {
      return;
    }

    try {
      const user = JSON.parse(savedUser) as { email?: string };
      if (user?.email) {
        this.loginForm.patchValue({ email: user.email, rememberMe: true });
      }
    } catch {
      localStorage.removeItem('userData');
    }
  }

  private persistRememberedUserIfNeeded(token: string): void {
    const rememberMe = this.loginForm.controls.rememberMe.value;
    if (!rememberMe) {
      localStorage.removeItem('userData');
      return;
    }

    const user = this.authService.decodeTokenPayload(token);
    if (typeof user?.email === 'string' && user.email) {
      localStorage.setItem('userData', JSON.stringify({ email: user.email }));
      return;
    }

    localStorage.removeItem('userData');
  }
}
