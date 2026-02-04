import { Users } from './../../../../../start-hereAdmin/src/app/users/users';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { Login } from './login';
import { RegisterComponent } from '../register/register.component';
import { Auth } from 'src/app/core/auth';

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
  loginForm: any
  isLoading = false;
  errorMessage = '';
  userData: any;

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


  showPassword = false;

  constructor(
    private loginService: Login,
    private authService: Auth,
  ) { }


  async login() {
    this.loginService.login(this.loginForm.value).subscribe(async (res: any) => {
      if (res.response == true && res.token) {
        const token = res.token;
        let user: any = {};
        if (token) {
          try {
            user = JSON.parse(atob(token.split('.')[1]));
          } catch (e) {
            console.error('Invalid JWT', e);
            user = {};
          }
        }
        if (this.loginForm.value.rememberMe) {
          localStorage.setItem('userData', JSON.stringify({email:user.email}));
        }
        // mark auth and close modal with token
        this.authService.loginSuccess(res.token);
        // notify host (embedded modal container or parent) of success
        this.authSuccess.emit({ success: true, token: res.token });
      }
    })
  }

  // Called from template to close modal or embedded panel
  async closeModal() {
    this.cancel.emit();
  }

  // Request host to switch to register (embedded or modal)
  async switchToRegister() {
    // ask host to switch to register view
    this.switchToRegisterRequested.emit();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
