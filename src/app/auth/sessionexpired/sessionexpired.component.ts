import { CommonModule } from '@angular/common';
import {
  Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthModalService } from '../auth-modal.service';

@Component({
  selector: 'app-sessionexpired',
  templateUrl: './sessionexpired.component.html',
  styleUrls: ['./sessionexpired.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,               
  imports: [CommonModule],  
})
export class SessionexpiredComponent implements OnInit, OnDestroy {

  @Output() loginAgain = new EventEmitter<void>();
  @Output() dismissed = new EventEmitter<void>();

  secondsLeft = 10;
  private timerSub?: Subscription;

  constructor(private cdr: ChangeDetectorRef, private authModal: AuthModalService) { }

  ngOnInit(): void {
    // Count down from 30; auto-redirect when it reaches 0
    this.timerSub = interval(1000)
      .pipe(take(this.secondsLeft))
      .subscribe({
        next: () => {
          this.secondsLeft--;
          this.cdr.markForCheck();
        },
        complete: () => {
          this.onLogin();
        },
      });
  }

  onLogin(): void {
    this.timerSub?.unsubscribe();
    this.loginAgain.emit();
    this.openLoginPanel();

  }

  onDismiss(): void {
    this.timerSub?.unsubscribe();
    this.dismissed.emit();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userData');
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }

  async openLoginPanel() {
    await this.authModal.openLogin();
  }

}
