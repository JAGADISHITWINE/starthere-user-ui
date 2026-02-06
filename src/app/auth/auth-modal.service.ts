import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type AuthView = 'login' | 'register' | 'cancle' | null;

interface ModalState {
  open: boolean;
  view: AuthView;
  // optional payload (e.g. booking data for cancel modal)
  payload?: any | null;
}

@Injectable({ providedIn: 'root' })
export class AuthModalService {
  private state = new BehaviorSubject<ModalState>({ open: false, view: null, payload: null });
  state$ = this.state.asObservable();

  // resolver for the current open modal promise
  private resolver: ((value: any) => void) | null = null;
  private rejecter: ((reason?: any) => void) | null = null;

  constructor() {}

  openLogin(): Promise<any> {
    return this.open('login');
  }

  openRegister(): Promise<any> {
    return this.open('register');
  }

  openCancel(booking: any): Promise<any> {
    return this.open('cancle', booking);
  }

  private open(view: AuthView, payload: any | null = null): Promise<any> {
    // open modal with optional payload
    this.state.next({ open: true, view, payload });

    return new Promise((resolve, reject) => {
      this.resolver = resolve;
      this.rejecter = reject;
    });
  }

  // Called by the modal container when auth succeeds
  resolve(payload: any) {
    if (this.resolver) {
      this.resolver(payload);
    }
    this.clear();
  }

  // Called to cancel/dismiss modal
  cancel() {
    if (this.rejecter) {
      this.rejecter(null);
    }
    this.clear();
  }

  private clear() {
    this.resolver = null;
    this.rejecter = null;
    this.state.next({ open: false, view: null, payload: null });
  }
}
