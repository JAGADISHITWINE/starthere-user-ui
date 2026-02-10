import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPassword } from './reset-password';
import { AuthModalService } from '../auth-modal.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  isLoading = false;
  tokenInvalid = false;
  tokenValidating = true;
  successMessage = '';
  errorMessage = '';
  showPassword = false;
  showConfirm = false;
  private resetToken = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private resetPassService: ResetPassword,
    private authService: AuthModalService,
  ) {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  ngOnInit() {
    // Read ?token=... from the email link
    this.route.queryParams.subscribe(params => {
      this.resetToken = params['token'] || '';

      if (!this.resetToken) {
        this.tokenInvalid = true;
        this.tokenValidating = false;
        return;
      }

      // Validate token with backend before showing form
      this.resetPassService.validateResetToken(this.resetToken).subscribe({
        next: (res: any) => {
          this.tokenValidating = false;
          if (!res.response) this.tokenInvalid = true;
        },
        error: () => {
          this.tokenValidating = false;
          this.tokenInvalid = true;
        }
      });
    });
  }

  submit() {
    if (this.resetForm.invalid) return;

    const { password, confirmPassword } = this.resetForm.value;

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.resetPassService.resetPassword({ token: this.resetToken, password }).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res.response) {
          this.successMessage = 'Password reset successful! Redirecting to login...';
          setTimeout(() => {
            // ✅ Navigate to home first, then open login modal
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
          }, 2000);
        } else {
          this.errorMessage = res.message || 'Failed to reset password.';
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Invalid or expired token.';
      }
    });
  }

  reloadPage() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}