import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Login } from './login';
import { Auth } from 'src/app/core/auth';
import { jwtDecode } from 'jwt-decode';
import { TokenService } from 'src/app/core/token.service';
import { Sessionexpired } from '../sessionexpired/sessionexpired';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  @Input() embedded: boolean = false;
  @Output() authSuccess = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  @Output() switchToRegisterRequested = new EventEmitter<void>();
  @Output() forgotPasswordRequested = new EventEmitter<void>();
  loginForm: any
  isLoading = false;
  errorMessage = '';
  userData: any;
  showPassword = false;
  successMessage: string = '';
  showForgotPassword: boolean = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    });

    const savedUser = localStorage.getItem('userData');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      this.loginForm.patchValue({ email: user.email, rememberMe: true });
    }
  }

  constructor(
    private loginService: Login,
    private authService: Auth,
    private tokenService: TokenService,
    private sessionService: Sessionexpired
  ) { }


  async login() {
    this.loginService.login(this.loginForm.value).subscribe(async (res: any) => {
      if (res.response == true && res.token) {
        const token = res.token;
        let user: any = {};
        if (token) {
          try {
            user = jwtDecode(token as string);
          } catch (e) {
            console.error('Invalid JWT', e);
            user = {};
          }
        }
        if (this.loginForm.value.rememberMe) {
          localStorage.setItem('userData', JSON.stringify({ email: user.email }));
        }

        this.successMessage = 'Login successful!';
        this.errorMessage = '';

        setTimeout(() => {
          this.successMessage = '';
          this.errorMessage = '';
          this.authService.loginSuccess(res.token);
          this.authSuccess.emit({ success: true, token: res.token });
        }, 2000);

      }
    }, (error) => {
      this.errorMessage = 'Login failed. Please check your credentials.';
      this.successMessage = '';
    });
  }

  // Called from template to close modal or embedded panel
  async closeModal() {
    this.cancel.emit();
    this.sessionService.reset(); 
  }

  // Request host to switch to register (embedded or modal)
  async switchToRegister() {
    // ask host to switch to register view
    this.switchToRegisterRequested.emit();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  openForgotPassword() {
    // Notify host/modal to switch to the forgot-password view
    this.forgotPasswordRequested.emit();
  }

  closeForgotPassword() {
    this.showForgotPassword = false;
  }

  handleBackToLogin() {
    this.showForgotPassword = false;
  }

}
