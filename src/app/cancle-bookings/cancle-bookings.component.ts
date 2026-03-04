import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CancleBookings } from './cancle-bookings';
import { DropdownOption, DropdownService } from '../core/dropdown.service';

@Component({
  selector: 'app-cancle-bookings',
  templateUrl: './cancle-bookings.component.html',
  styleUrls: ['./cancle-bookings.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CancleBookingsComponent implements OnInit {

  @Input() booking: any;
  @Input() isOpen = false;
  @Output() modalClosed = new EventEmitter<boolean>();

  acceptedTerms = false;
  cancellationReason = '';
  isSubmitting = false;
  errorMessage = '';
  showSuccessScreen: boolean = false;

  cancellationReasons: DropdownOption[] = [];
  refundedAmount: any;

  constructor(
    private bookingService: CancleBookings,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {
    this.loadCancellationReasons();
  }

  private loadCancellationReasons() {
    const fallback: DropdownOption[] = [
      { value: 'Change of plans', label: 'Change of plans' },
      { value: 'Medical emergency', label: 'Medical emergency' },
      { value: 'Work commitments', label: 'Work commitments' },
      { value: 'Weather concerns', label: 'Weather concerns' },
      { value: 'Financial reasons', label: 'Financial reasons' },
      { value: 'Found alternative trek', label: 'Found alternative trek' },
      { value: 'Other', label: 'Other' },
    ];

    this.dropdownService.getOptions('cancellation-reasons', fallback).subscribe((options) => {
      this.cancellationReasons = options;
    });
  }

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
          this.refundedAmount = response.data.totalRefund
          this.showSuccessScreen = true;

          setTimeout(() => {
            this.closeModal(true);
          }, 1500);
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
