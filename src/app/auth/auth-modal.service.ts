import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type AuthView = 'login' | 'register' | 'forgotPassword' | 'cancle' | 'sessionExpired' | null;

interface ModalState {
  open: boolean;
  view: AuthView;
  // optional payload (e.g. booking data for cancel modal)
  payload?: any | null;
}

@Injectable({ providedIn: 'root' })
export class AuthModalService {
  private stateSubject = new BehaviorSubject<ModalState>({ open: false, view: null });
  state$ = this.stateSubject.asObservable();

  private resolveFn?: (value: any) => void;
  private rejectFn?: (reason?: any) => void;

  private open(view: ModalState['view'], payload?: any): Promise<any> {
    this.stateSubject.next({ open: true, view, payload });
    return new Promise((resolve, reject) => {
      this.resolveFn = resolve;
      this.rejectFn  = reject;
    });
  }

  openLogin(): Promise<any>          { return this.open('login'); }
  openRegister(): Promise<any>       { return this.open('register'); }
  openForgotPassword(): Promise<any> { return this.open('forgotPassword'); }
  openCancle(booking: any): Promise<any> { return this.open('cancle', booking); }

  /** Triggered by ErrorInterceptor / SessionService on 401 with existing token */
  openSessionExpired(): Promise<any> { return this.open('sessionExpired'); }

  resolve(value: any): void {
    this.stateSubject.next({ open: false, view: null });
    this.resolveFn?.(value);
  }

  cancel(): void {
    this.stateSubject.next({ open: false, view: null });
    this.rejectFn?.('cancelled');
  }
}
