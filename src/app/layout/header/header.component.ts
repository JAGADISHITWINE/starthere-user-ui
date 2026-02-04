import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Auth } from 'src/app/core/auth';
import { AuthModalService } from 'src/app/auth/auth-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class HeaderComponent implements OnInit {
  showLogin = true;
  showLogout = false;
  showLoginPanel = false;
  showRegisterPanel = false;

  constructor(private routes: Router, private authService: Auth, private authModal: AuthModalService) { }

  ngOnInit() {
    this.authService.authStatus$.subscribe(isLoggedIn => {
      this.showLogin = !isLoggedIn;
      this.showLogout = isLoggedIn;
    });
  }

  async openLoginPanel() {
    try {
      const res = await this.authModal.openLogin();
    } catch (err) {
    }
  }

  async openRegisterPanel() {
    try {
      const res = await this.authModal.openRegister();
    } catch (err) {
    }
  }

  onAuthSuccess(event: any) {
    // auth service already updated state by components
    this.showLoginPanel = false;
    this.showRegisterPanel = false;
  }

  onCancelPanel() {
    this.showLoginPanel = false;
    this.showRegisterPanel = false;
  }

  Logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userData');
    this.routes.navigateByUrl('')
    this.showLogin = true;
    this.showLogout = false;
  }
}
