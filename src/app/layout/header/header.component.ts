import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Auth } from 'src/app/core/auth';
import { AuthModalService } from 'src/app/auth/auth-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule],
})
export class HeaderComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  // Auth state
  isLoggedIn = false;

  // UI state
  isUserDropdownOpen = false;
  isMobileMenuOpen = false;

  // User data
  userName = '';
  userEmail = '';
  profilePicture: string | null = null;

  constructor(
    private routes: Router,
    private authService: Auth,
    private authModal: AuthModalService,
  ) {}

  ngOnInit() {
    this.authService.authStatus$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;

        if (isLoggedIn) {
          const user = this.authService.getDecodedTokenPayload();
          this.userName = typeof user?.name === 'string' ? user.name : 'User';
          this.userEmail = typeof user?.email === 'string' ? user.email : '';
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
    this.authService.logout();
    this.resetUserData();
    this.closeUserDropdown();
    this.closeMobileMenu();
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
      .map((n) => n[0])
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
}
