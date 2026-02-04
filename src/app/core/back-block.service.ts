import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BackBlockService {
  private enabled = true;

  constructor(private router: Router) {
    // Push a history entry on load so back goes to same page
    history.pushState(null, document.title, location.href);

    window.addEventListener('popstate', (e) => {
      if (!this.enabled) return;
      // Prevent navigation via back button
      // Re-push state and optionally navigate to current route
      history.pushState(null, document.title, location.href);
      // Optionally show a message: we avoid UI dependencies here
      console.warn('Back navigation blocked');
    });

    // Also guard router navigations that are triggered programmatically
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        // Optionally check conditions and cancel
      }
    });
  }

  disable() { this.enabled = false; }
  enable() { this.enabled = true; }
}
