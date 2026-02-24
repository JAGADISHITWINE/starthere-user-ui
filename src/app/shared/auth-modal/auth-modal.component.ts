import { CancleBookingsComponent } from '../../cancle-bookings/cancle-bookings.component';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { ForgotPasswordComponent } from '../../auth/forgot-password/forgot-password.component';
import { SessionexpiredComponent } from '../../auth/sessionexpired/sessionexpired.component';
import { AuthModalService } from '../../auth/auth-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CancleBookingsComponent,
    SessionexpiredComponent,
  ],
  template: `
    <div class="auth-modal-backdrop" *ngIf="visible" (click)="onBackdropClick()"></div>

    <div class="auth-modal" *ngIf="visible" role="dialog" aria-modal="true">
      <div class="auth-modal-dialog">
        <div class="auth-modal-content">
          <div class="auth-modal-body p-3">

            <ng-container [ngSwitch]="view">
              <app-login
                *ngSwitchCase="'login'"
                [embedded]="true"
                (authSuccess)="onAuthSuccess($event)"
                (cancel)="close()"
                (switchToRegisterRequested)="switchToRegister()"
                (forgotPasswordRequested)="switchToForgotPassword()">
              </app-login>

              <app-register
                *ngSwitchCase="'register'"
                [embedded]="true"
                (authSuccess)="onAuthSuccess($event)"
                (cancel)="close()"
                (switchToLoginRequested)="switchToLogin()">
              </app-register>

              <app-forgot-password
                *ngSwitchCase="'forgotPassword'"
                (closeModalEvent)="close()"
                (backToLogin)="switchToLogin()">
              </app-forgot-password>

              <app-cancle-bookings
                *ngSwitchCase="'cancle'"
                [booking]="booking"
                (modalClosed)="onCancelModalClosed($event)">
              </app-cancle-bookings>

              <!-- Session expired sits inside the same wrapper as all other views -->
              <app-sessionexpired
                *ngSwitchCase="'sessionExpired'"
                (loginAgain)="onSessionLoginAgain()"
                (dismissed)="onSessionDismissed()">
              </app-sessionexpired>
            </ng-container>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Backdrop */
    .auth-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(4px);
      z-index: 1040;
    }

    /* Modal wrapper */
    .auth-modal {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      z-index: 1050;
    }

    /* Dialog */
    .auth-modal-dialog {
      width: 100%;
      max-width: 520px;
      max-height: calc(100vh - 32px);
    }

    /* Content */
    .auth-modal-content {
      position: relative;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      overflow-y: auto;
      max-height: 100%;
    }

    .close-modal:hover { opacity: 1; }

    @media (max-width: 576px) {
      .auth-modal-dialog { max-width: 100%; }
      .auth-modal-content { border-radius: 10px; }
    }
  `]
})
export class AuthModalComponent implements OnDestroy {
  visible = false;
  view: 'login' | 'register' | 'forgotPassword' | 'cancle' | 'sessionExpired' | null = null;
  booking: any = null;

  private sub: Subscription;

  constructor(
    private authModal: AuthModalService,
    private router: Router,
  ) {
    this.sub = this.authModal.state$.subscribe(s => {
      this.visible = s.open;
      this.view    = s.view;
      this.booking = s.payload || null;
    });
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  onAuthSuccess(payload: any)        { this.authModal.resolve(payload); }
  close()                             { this.authModal.cancel(); }
  onBackdropClick()                   { this.close(); }
  switchToRegister()                  { this.authModal.openRegister(); }
  switchToLogin()                     { this.authModal.openLogin(); }
  switchToForgotPassword()            { this.authModal.openForgotPassword(); }

  onCancelModalClosed(cancelled: boolean) {
    cancelled
      ? this.authModal.resolve({ cancelled: true, booking: this.booking })
      : this.close();
  }

  onSessionLoginAgain(): void {
    this.authModal.resolve({ sessionExpired: true });
    this.router.navigate(['/login']);
  }

  onSessionDismissed(): void {
    this.authModal.cancel();
  }
}