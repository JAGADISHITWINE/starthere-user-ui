import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AuthModalService } from '../auth-modal.service';

@Injectable({
  providedIn: 'root',
})
export class Sessionexpired {
 constructor(private authModal: AuthModalService) {}

  notifyExpired(): void {
    this.authModal.openSessionExpired();
  }

  reset(): void {
    this.authModal.cancel();
  }
}
