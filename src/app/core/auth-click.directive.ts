import { Directive, HostListener, Input } from '@angular/core';
import { Auth } from './auth';
import { AuthModalService } from 'src/app/auth/auth-modal.service';

@Directive({
  selector: '[authClick]',
  standalone: true
})
export class AuthClickDirective {
  @Input('authClick') action: (() => void) | undefined;

  constructor(private auth: Auth, private authModal: AuthModalService) {}

  @HostListener('click', ['$event'])
  async onClick(e: Event) {
    if (this.auth.isLoggedIn()) {
      // proceed with provided action if present
      if (typeof this.action === 'function') this.action();
      return;
    }

    e.preventDefault();
    try {
      await this.authModal.openLogin();
      // if logged in after modal, run the action
      if (this.auth.isLoggedIn() && typeof this.action === 'function') this.action();
    } catch {
      // user dismissed login
    }
  }
}
