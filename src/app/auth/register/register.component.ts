import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { Register } from './register';
import { Auth } from 'src/app/core/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})

export class RegisterComponent implements OnInit {
  @Input() embedded: boolean = false;
  @Output() authSuccess             = new EventEmitter<any>();
  @Output() cancel                  = new EventEmitter<void>();
  @Output() switchToLoginRequested  = new EventEmitter<void>();

  registerForm!: FormGroup;
  showPassword        = false;
  showConfirmPassword = false;
  errorMessage        = '';
  successMessage      = '';
  isLoading           = false;

  // OTP state
  step: 'form' | 'otp' = 'form';   // ← controls which view shows
  otpValue             = '';
  otpLoading           = false;
  otpError             = '';
  resendLoading        = false;
  resendCooldown       = 0;         // countdown seconds
  private cooldownRef: any;

  constructor(
    private fb:              FormBuilder,
    private registerService: Register,
    private authService:     Auth,
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name:            ['', Validators.required],
      email:           ['', [Validators.required, Validators.email]],
      phone:           ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password:        ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // ── Step 1: Submit form → send OTP ──────────────────
  async register() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.isLoading    = true;
    this.errorMessage = '';

    this.registerService.sendOtp(this.registerForm.value.email,this.registerForm.value.phone).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res.response) {
          this.step = 'otp';           // ← show OTP screen
          this.startResendCooldown();
        } else {
          this.errorMessage = res.message || 'Failed to send OTP.';
        }
      },
      error: (err) => {
        this.isLoading    = false;
        this.errorMessage = err.error?.message || 'Failed to send OTP.';
      }
    });
  }

  // ── Step 2: Verify OTP → complete registration ──────
  verifyOtp() {
    if (this.otpValue.length !== 6) {
      this.otpError = 'Please enter the 6-digit OTP';
      return;
    }

    this.otpLoading = true;
    this.otpError   = '';

    this.registerService.verifyOtp(
      this.registerForm.value.email,
      this.otpValue
    ).subscribe({
      next: (res: any) => {
        if (res.response) {
          // OTP verified — now complete registration
          this.completeRegistration();
        } else {
          this.otpLoading = false;
          this.otpError   = res.message || 'Invalid OTP.';
        }
      },
      error: (err) => {
        this.otpLoading = false;
        this.otpError   = err.error?.message || 'Invalid OTP.';
      }
    });
  }

  // ── Step 3: Register after OTP verified ─────────────
  private completeRegistration() {
    this.registerService.register(this.registerForm.value).subscribe({
      next: (res: any) => {
        this.otpLoading = false;
        if (res.response) {
          this.successMessage = 'Registration successful! Welcome aboard!';
          setTimeout(() => {
            this.authService.loginSuccess(res.token);
            this.authSuccess.emit({ success: true, token: res.token });
          }, 2000);
        } else {
          this.otpError = res.message || 'Registration failed.';
        }
      },
      error: (err) => {
        this.otpLoading = false;
        this.otpError   = err.error?.message || 'Registration failed.';
      }
    });
  }

  // ── Resend OTP with 30s cooldown ────────────────────
  resendOtp() {
    this.resendLoading = true;
    this.otpError      = '';

    this.registerService.sendOtp(this.registerForm.value.email,this.registerForm.value.phone).subscribe({
      next: () => {
        this.resendLoading = false;
        this.otpValue      = '';
        this.startResendCooldown();
      },
      error: () => { this.resendLoading = false; }
    });
  }

  private startResendCooldown() {
    this.resendCooldown = 30;
    clearInterval(this.cooldownRef);
    this.cooldownRef = setInterval(() => {
      this.resendCooldown--;
      if (this.resendCooldown <= 0) clearInterval(this.cooldownRef);
    }, 1000);
  }

  onlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  togglePassword()        { this.showPassword        = !this.showPassword; }
  toggleConfirmPassword() { this.showConfirmPassword  = !this.showConfirmPassword; }
  switchToLogin()         { this.switchToLoginRequested.emit(); }
  closeModal()            { this.cancel.emit(); }

  ngOnDestroy() { clearInterval(this.cooldownRef); }

  onOtpInput(event: Event, index: number) {
  const input = event.target as HTMLInputElement;
  const val   = input.value.replace(/[^0-9]/g, '');
  input.value = val;

  // Build otpValue string
  const arr      = this.otpValue.split('');
  arr[index]     = val;
  this.otpValue  = arr.join('').substring(0, 6);

  // Auto-focus next box
  if (val && index < 5) {
    (document.getElementById(`otp-${index + 1}`) as HTMLInputElement)?.focus();
  }
}

onOtpKeydown(event: KeyboardEvent, index: number) {
  if (event.key === 'Backspace' && !this.otpValue[index] && index > 0) {
    (document.getElementById(`otp-${index - 1}`) as HTMLInputElement)?.focus();
  }
}

changeEmail() {
  this.step = 'form';
  this.otpValue = '';
  this.otpError = '';
}

}
