import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type AuthView = 'login' | 'register' | null;

interface ModalState {
  open: boolean;
  view: AuthView;
}

@Injectable({ providedIn: 'root' })
export class AuthModalService {
  private state = new BehaviorSubject<ModalState>({ open: false, view: null });
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

  private open(view: AuthView): Promise<any> {
    // close any existing modal first
    this.state.next({ open: true, view });

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
    this.state.next({ open: false, view: null });
  }
}
