import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BackBlockService } from './core/back-block.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router: Router, private _backBlock: BackBlockService) {

    this.router.events.pipe(filter((e:any): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      try {
        // scroll the main window to top
        window.scrollTo(0, 0);

        // If pages use Ionic's <ion-content>, ensure those scrollable containers also go to top
        const ionContents = document.querySelectorAll('ion-content');
        ionContents.forEach((c: any) => {
          try {
            if (typeof c.scrollToTop === 'function') {
              c.scrollToTop(0);
            } else {
              // fallback to setting scrollTop
              c.scrollTop = 0;
            }
          } catch (e) {
            // ignore
          }
        });
      } catch (err) {
        // no-op in non-browser environments
      }
    });
  }
}
