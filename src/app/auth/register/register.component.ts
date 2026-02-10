import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  @Output() authSuccess = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  @Output() switchToLoginRequested = new EventEmitter<void>();

  registerForm: any
  showPassword = false;
  showConfirmPassword = false;
  errorMessage = '';
  isLoading = false;
  successMessage = '';


  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  constructor(
    private router: Router,
    private alertController: AlertController,
    private registerService: Register,
    private authService: Auth,

  ) { }

  async register() {
    // Fix: Access form values correctly
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      this.successMessage = '';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.registerService.register(this.registerForm.value).subscribe(
      async (res: any) => {
        console.log('[RegisterComponent] Registration response:', res);
        this.isLoading = false;

        if (res.response === true) {
          // Show success message
          this.successMessage = 'Registration successful! Welcome aboard!';
          this.errorMessage = '';

          // Auto-dismiss and proceed after 2 seconds
          setTimeout(() => {
            this.successMessage = '';
            // mark auth and close modal with token
            this.authService.loginSuccess(res.token);
            // notify host (embedded modal container or parent) of success
            this.authSuccess.emit({ success: true, token: res.token });
          }, 2000);
        } else {
          this.errorMessage = res.message || 'Registration failed. Please try again.';
        }
      },
      (error) => {
        // Handle error case
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async switchToLogin() {
    console.log('[RegisterComponent] switchToLogin clicked');
    this.switchToLoginRequested.emit();
  }

  // Close modal or emit cancel when embedded
  async closeModal() {
    this.cancel.emit();
  }

  onlyNumbers(event: Event) {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/[^0-9]/g, '');
}


}
