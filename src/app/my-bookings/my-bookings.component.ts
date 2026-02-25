import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Auth } from "../core/auth";
import { MyBookings } from "./my-bookings";
import { AuthModalService } from "../auth/auth-modal.service";
import { TokenService } from 'src/app/core/token.service';

interface Booking {
  id: number;
  booking_reference: any;
  trek_name: string;
  location: string;
  start_date: string;
  end_date: string;
  participants: number;
  total_amount: number;
  amount_paid: number;
  balance_due: number;
  booking_status: "pending" | "confirmed" | "cancelled" | "completed";
  payment_status: "pending" | "partial" | "paid" | "refunded";
  created_at: string;
  cover_image: string;
  addons: any[];
  can_cancel: boolean;
  days_until_trek: number;
  user_rating?: number | null;
  user_review?: string | null;
  rated_at?: string | null;
}

@Component({
  selector: "app-my-bookings",
  templateUrl: "./my-bookings.component.html",
  styleUrls: ["./my-bookings.component.scss"],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, FormsModule],
})
export class MyBookingsComponent implements OnInit {
  activeTab: "upcoming" | "past" | "cancelled" = "upcoming";

  upcomingBookings: Booking[] = [];
  pastBookings: Booking[] = [];
  cancelledBookings: Booking[] = [];
  booking_reference: any;

  isLoading = false;
  errorMessage = "";

  // Stats
  totalBookings = 0;
  totalSpent = 0;
  upcomingTrips = 0;
  completedTrips = 0;
  userId: any;
  ratingModalOpen = false;
  isSubmittingRating = false;
  ratingErrorMessage = "";
  selectedBookingForRating: Booking | null = null;
  selectedRating = 0;
  selectedReview = "";

  constructor(
    private bookingService: MyBookings,
    private authModal: AuthModalService,
    private router: Router,
  private tokenService: TokenService,
  ) { }

  ngOnInit() {
    // Use TokenService to read and decode the token in a single place
    try {
      this.userId = this.tokenService.getUserId();
    } catch (e) {
      this.userId = null as any;
    }
    this.loadBookings();
  }

  /**
   * Load all user bookings
   */
  loadBookings() {
    this.isLoading = true;
    this.errorMessage = "";

    this.bookingService.getMyBookings(this.userId).subscribe((response: any) => {
      if (response.success == true) {

        this.categorizeBookings(response.data.bookings);
        this.calculateStats(response.data.bookings);
      }
      this.isLoading = false;
    },
    );
  }

  /**
   * Categorize bookings into upcoming, past, and cancelled
   */
  categorizeBookings(bookings: Booking[]) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.upcomingBookings = bookings.filter((b) => {
      const trekDate = new Date(b.start_date);
      return (
        b.booking_status !== "cancelled" &&
        b.booking_status !== "completed" &&
        trekDate >= today
      );
    });

    this.pastBookings = bookings.filter((b) => {
      const trekDate = new Date(b.start_date);
      return (
        b.booking_status === "completed" ||
        (b.booking_status !== "cancelled" && trekDate < today)
      );
    });

    this.cancelledBookings = bookings.filter(
      (b) => b.booking_status === "cancelled",
    );

    // Sort by date
    this.upcomingBookings.sort(
      (a, b) =>
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
    );

    this.pastBookings.sort(
      (a, b) =>
        new Date(b.start_date).getTime() - new Date(a.start_date).getTime(),
    );
  }

  /**
   * Calculate statistics
   */
  calculateStats(bookings: Booking[]) {
    this.totalBookings = bookings.filter(
      (b) => b.booking_status !== "cancelled",
    ).length;

    this.totalSpent = bookings
      .filter((b) => b.booking_status !== "cancelled")
      .reduce((sum, b) => sum + parseFloat(b.total_amount.toString()), 0);

    this.upcomingTrips = this.upcomingBookings.length;
    this.completedTrips = bookings.filter(
      (b) => b.booking_status === "completed",
    ).length;
  }

  /**
   * Get current bookings based on active tab
   */
  get currentBookings(): Booking[] {
    switch (this.activeTab) {
      case "upcoming":
        return this.upcomingBookings;
      case "past":
        return this.pastBookings;
      case "cancelled":
        return this.cancelledBookings;
      default:
        return [];
    }
  }

  /**
   * Switch tab
   */
  switchTab(tab: "upcoming" | "past" | "cancelled") {
    this.activeTab = tab;
  }

  viewBookingDetails(booking: any) {
    this.router.navigate(['/tour-details', booking.trek_id]);
  }


  downloadReceipt(booking: any) {
    const bookingId = booking.id;
    this.booking_reference = booking.booking_reference
    this.bookingService.downloadReceipt(bookingId, this.userId).subscribe({
      next: (response: any) => {
        const blob = new Blob([response.body], {
          type: 'application/pdf'
        });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        // Extract filename from Content-Disposition header
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = `Receipt_${this.booking_reference}.pdf`; // Default fallback

        if (contentDisposition) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }

        link.download = filename;
        link.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Download failed:', error);
      }
    });
  }

  /**
   * Get status badge class
   */
  getStatusClass(status: string): string {
    switch (status) {
      case "confirmed":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "cancelled":
        return "badge-danger";
      case "completed":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }

  /**
   * Get payment status badge class
   */
  getPaymentStatusClass(status: string): string {
    switch (status) {
      case "paid":
        return "badge-success";
      case "partial":
        return "badge-info";
      case "pending":
        return "badge-warning";
      case "refunded":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }

  /**
   * Format date
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  /**
   * Calculate days until trek
   */
  getDaysUntilTrek(startDate: string): number {
    const today = new Date();
    const trek = new Date(startDate);
    const diffTime = trek.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Check if booking can be cancelled
   */
  canCancel(booking: Booking): boolean {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);
    return (
      (booking.booking_status === "pending" ||
        booking.booking_status === "confirmed") &&
      daysUntil >= 7
    );
  }

  /**
   * Get cancellation fee message
   */
  getCancellationFeeMessage(booking: Booking): string {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);

    if (daysUntil >= 30) {
      return "100% refund (No cancellation fee)";
    } else if (daysUntil >= 15) {
      return "75% refund (25% cancellation fee)";
    } else if (daysUntil >= 7) {
      return "50% refund (50% cancellation fee)";
    } else {
      return "No refund (Cannot cancel within 7 days)";
    }
  }

  async openCancelModal(booking: any) {
    // attach userId to the booking payload so the cancel modal and service have context
    const payload = { ...booking, userId: this.userId };
    try {
      const result: any = await this.authModal.openCancle(payload);
      // If modal resolved with cancellation, refresh bookings (keeps UI in sync)
      if (result?.cancelled) {
        this.loadBookings();
      }
    } catch (e) {
      // modal dismissed/cancelled — no action
    }
  }

  hasUserRated(booking: Booking): boolean {
    const rating = Number(booking.user_rating || 0);
    return rating >= 1 && rating <= 5;
  }

  openRatingModal(booking: Booking) {
    this.selectedBookingForRating = booking;
    this.selectedRating = Number(booking.user_rating || 0);
    this.selectedReview = booking.user_review || "";
    this.ratingErrorMessage = "";
    this.ratingModalOpen = true;
  }

  closeRatingModal() {
    if (this.isSubmittingRating) return;
    this.ratingModalOpen = false;
    this.selectedBookingForRating = null;
    this.selectedRating = 0;
    this.selectedReview = "";
    this.ratingErrorMessage = "";
  }

  setRating(stars: number) {
    this.selectedRating = stars;
  }

  submitRating() {
    if (!this.selectedBookingForRating) return;
    if (this.selectedRating < 1 || this.selectedRating > 5) {
      this.ratingErrorMessage = "Please select a star rating.";
      return;
    }

    this.isSubmittingRating = true;
    this.ratingErrorMessage = "";

    const payload = {
      rating: this.selectedRating,
      review: this.selectedReview?.trim() || "",
    };

    this.bookingService
      .submitTrekRating(this.selectedBookingForRating.id, this.userId, payload)
      .subscribe({
        next: () => {
          if (!this.selectedBookingForRating) return;
          this.selectedBookingForRating.user_rating = this.selectedRating;
          this.selectedBookingForRating.user_review = payload.review;
          this.selectedBookingForRating.rated_at = new Date().toISOString();
          this.isSubmittingRating = false;
          this.closeRatingModal();
        },
        error: () => {
          this.isSubmittingRating = false;
          this.ratingErrorMessage = "Could not submit rating. Please try again.";
        },
      });
  }
}
