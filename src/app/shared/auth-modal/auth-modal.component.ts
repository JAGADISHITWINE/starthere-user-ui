import { CancleBookingsComponent } from '../../cancle-bookings/cancle-bookings.component';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { ForgotPasswordComponent } from '../../auth/forgot-password/forgot-password.component';
import { AuthModalService } from '../../auth/auth-modal.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent, CancleBookingsComponent, ForgotPasswordComponent],
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

    .close-modal:hover {
      opacity: 1;
    }

    /* Mobile tweaks */
    @media (max-width: 576px) {
      .auth-modal-dialog {
        max-width: 100%;
      }

      .auth-modal-content {
        border-radius: 10px;
      }
    }
  `]
})
export class AuthModalComponent implements OnDestroy {
  visible = false;
  view: 'login' | 'register' | 'forgotPassword' | 'cancle' | null = null;
  booking: any = null;

  private sub: Subscription;

  constructor(private authModal: AuthModalService) {
    this.sub = this.authModal.state$.subscribe(s => {
      this.visible = s.open;
      this.view = s.view;
      this.booking = (s as any).payload || null;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onAuthSuccess(payload: any) {
    this.authModal.resolve(payload);
  }

  onCancelModalClosed(cancelled: boolean) {
    if (cancelled) {
      this.authModal.resolve({ cancelled: true, booking: this.booking });
    } else {
      this.close();
    }
  }

  close() {
    this.authModal.cancel();
  }

  onBackdropClick() {
    this.close();
  }

  switchToRegister() {
    this.authModal.openRegister();
  }

  switchToLogin() {
    this.authModal.openLogin();
  }

  switchToForgotPassword() {
    this.authModal.openForgotPassword();
  }
}