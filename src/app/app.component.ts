import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BackBlockService } from './core/back-block.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnDestroy {

  showScrollTop = false;

  private routerSub?: Subscription;
  private scrollListener: any;

  constructor(
    private router: Router,
    private _backBlock: BackBlockService
  ) {

    // 🔄 Listen to route change
    this.routerSub = this.router.events
      .pipe(filter((e: any): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {

        setTimeout(() => {
          const ionContent = document.querySelector('ion-content') as any;

          if (!ionContent) return;

          // 🔼 Reset scroll on page change
          if (typeof ionContent.scrollToTop === 'function') {
            ionContent.scrollToTop(0);
          }

          // 🧹 Remove previous listener if exists
          if (this.scrollListener) {
            ionContent.removeEventListener('ionScroll', this.scrollListener);
          }

          // 👀 Add scroll listener
          this.scrollListener = (event: any) => {
            const scrollTop = event.detail.scrollTop;
            this.showScrollTop = scrollTop > 300;
          };

          ionContent.addEventListener('ionScroll', this.scrollListener);

          // ⚠️ IMPORTANT: Enable scroll events
          ionContent.scrollEvents = true;

        }, 150);

      });
  }

  // 🔼 Smooth scroll to top
  scrollToTop() {
    const ionContent = document.querySelector('ion-content') as any;

    if (ionContent && typeof ionContent.scrollToTop === 'function') {
      ionContent.scrollToTop(500);
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}