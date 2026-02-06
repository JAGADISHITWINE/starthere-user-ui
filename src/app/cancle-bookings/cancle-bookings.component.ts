import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CancleBookings } from './cancle-bookings';

@Component({
  selector: 'app-cancle-bookings',
  templateUrl: './cancle-bookings.component.html',
  styleUrls: ['./cancle-bookings.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CancleBookingsComponent {

  @Input() booking: any;
  @Input() isOpen = false;
  @Output() modalClosed = new EventEmitter<boolean>();

  acceptedTerms = false;
  cancellationReason = '';
  isSubmitting = false;
  errorMessage = '';
  showSuccessScreen: boolean = false;

  cancellationReasons = [
    'Change of plans',
    'Medical emergency',
    'Work commitments',
    'Weather concerns',
    'Financial reasons',
    'Found alternative trek',
    'Other'
  ];

  constructor(private bookingService: CancleBookings) { }

  /**
   * Close modal
   */
  closeModal(cancelled: boolean = false) {
    this.resetForm();
    this.modalClosed.emit(cancelled);
  }

  /**
   * Reset form
   */
  resetForm() {
    this.acceptedTerms = false;
    this.cancellationReason = '';
    this.errorMessage = '';
  }

  /**
   * Calculate refund amount based on cancellation policy
   */
  get refundAmount(): number {
    if (!this.booking) return 0;

    const daysUntil = this.getDaysUntilTrek();
    const totalAmount = parseFloat(this.booking.total_amount);

    if (daysUntil >= 30) {
      return totalAmount; // 100% refund
    } else if (daysUntil >= 15) {
      return totalAmount * 0.75; // 75% refund
    } else if (daysUntil >= 7) {
      return totalAmount * 0.50; // 50% refund
    } else {
      return 0; // No refund
    }
  }

  /**
   * Calculate cancellation fee
   */
  get cancellationFee(): number {
    if (!this.booking) return 0;
    return parseFloat(this.booking.total_amount) - this.refundAmount;
  }

  /**
   * Get refund percentage
   */
  get refundPercentage(): number {
    if (!this.booking) return 0;
    return (this.refundAmount / parseFloat(this.booking.total_amount)) * 100;
  }

  /**
   * Get days until trek
   */
  getDaysUntilTrek(): number {
    const today = new Date();
    const trekDate = new Date(this.booking.start_date);
    const diffTime = trekDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Check if can submit
   */
  get canSubmit(): boolean {
    return this.acceptedTerms &&
      this.cancellationReason.trim() !== '' &&
      !this.isSubmitting;
  }

  /**
   * Submit cancellation
   */
  submitCancellation() {
    if (!this.canSubmit) {
      this.errorMessage = 'Please accept the terms and provide a reason.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const otherData = {
      reason: this.cancellationReason,
      acceptedTerms: this.acceptedTerms,
      userId: this.booking?.userId ?? null,
    };

    this.bookingService.cancelBooking(this.booking.id, otherData).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.showSuccessScreen = true;

          // Auto close after 4 seconds
          setTimeout(() => {
            this.closeModal(true);
          }, 4000);
        }
        this.isSubmitting = false;
      },
      error: (error: any) => {
        console.error('Cancellation error:', error);
        this.errorMessage = error.error?.message || 'Failed to cancel booking. Please try again.';
        this.isSubmitting = false;
      }
    });
  }

}