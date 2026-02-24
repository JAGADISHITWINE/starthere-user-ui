import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BackBlockService } from './core/back-block.service';
import { Sessionexpired } from './auth/sessionexpired/sessionexpired';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false, // ← keeps AppModule in charge of imports/declarations
})
export class AppComponent {
  sessionExpired = false;

  private sessionSub?: Subscription;

   constructor(private router: Router, private _backBlock: BackBlockService) {
    this.router.events
      .pipe(filter((e: any): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        try {
          window.scrollTo(0, 0);
          const ionContents = document.querySelectorAll('ion-content');
          ionContents.forEach((c: any) => {
            try {
              if (typeof c.scrollToTop === 'function') {
                c.scrollToTop(0);
              } else {
                c.scrollTop = 0;
              }
            } catch (e) { /* ignore */ }
          });
        } catch (err) { /* no-op in non-browser environments */ }
      });
  }

}