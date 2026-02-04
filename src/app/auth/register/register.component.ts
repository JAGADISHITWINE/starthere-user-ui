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


  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      agreeToTerms: new FormControl('', Validators.required)
    });
  }

  constructor(
    private router: Router,
    private alertController: AlertController,
    private registerService: Register,
    private authService : Auth,

  ) { }

  async register() {

    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Passwords do not match',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.registerService.register(this.registerForm.value).subscribe(async (res: any) => {
      if (res.response == true && res.token) {
        // mark auth and close modal with result
        this.authService.loginSuccess(res.token);
        this.authSuccess.emit({ success: true, token: res.token });
      }
    })


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

}
