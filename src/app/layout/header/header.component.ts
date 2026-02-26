import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Auth } from 'src/app/core/auth';
import { TokenService } from 'src/app/core/token.service';
import { AuthModalService } from 'src/app/auth/auth-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule, RouterLinkActive]
})
export class HeaderComponent implements OnInit {

  // Auth state
  isLoggedIn = false;

  // UI state
  isUserDropdownOpen = false;
  isMobileMenuOpen = false;

  // User data
  userName = '';
  userEmail = '';
  profilePicture: string | null = null;
  isSearchOpen = false;
  searchQuery  = '';

  isScrolled = false;


  constructor(
    private routes: Router,
    private authService: Auth,
    private authModal: AuthModalService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.authService.authStatus$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;

      if (isLoggedIn) {
        const decoded = this.tokenService.decode();
        this.userName = decoded?.name || decoded?.username || 'User';
        this.userEmail = decoded?.email || '';

      } else {
        this.resetUserData();
      }
    });
  }

  /* ---------------- AUTH ---------------- */

  async openLoginPanel() {
    await this.authModal.openLogin();
  }

  async openRegisterPanel() {
    await this.authModal.openRegister();
  }

  logout() {
    this.tokenService.clear();

    this.resetUserData();

    this.closeUserDropdown();
    this.closeMobileMenu();

    setTimeout(()=>{
          this.routes.navigateByUrl('/');
    },500)
  }

  /* ---------------- USER UI ---------------- */

  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  closeUserDropdown() {
    this.isUserDropdownOpen = false;
  }

  getUserInitials(): string {
    if (!this.userName) return 'U';
    return this.userName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  /* ---------------- MOBILE ---------------- */

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  /* ---------------- NAV ---------------- */

  navigateTo(route: string) {
    this.routes.navigateByUrl(route);
    this.closeUserDropdown();
    this.closeMobileMenu();
  }

  /* ---------------- HELPERS ---------------- */

  private resetUserData() {
    this.userName = '';
    this.userEmail = '';
    this.profilePicture = null;
    this.isLoggedIn = false;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}

