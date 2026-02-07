import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TourDetails } from "../tour-details/tour-details";
import { Booking, BookingData } from "./booking";
import { Auth } from "../core/auth";
import { AuthModalService } from "../auth/auth-modal.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class BookingComponent implements OnInit {
  trekId: number = 0;
  currentStep: number = 1;
  isLoading: boolean = true;
  termsAccepted: boolean = false;

  // Trek data from API
  trek: any = null;
  batches: any[] = [];
  selectedBatch: any = null;

  // Booking form data
  booking = {
    batchId: 0,
    date: "",
    participants: 1,
    name: "",
    email: "",
    phone: "",
    emergencyContact: "",
    specialRequests: "",
  };

  // Add-ons
  addOns = [
    { id: 1, name: "Trekking Poles", price: 200, selected: false },
    { id: 2, name: "Sleeping Bag", price: 300, selected: false },
    { id: 3, name: "Travel Insurance", price: 500, selected: false },
  ];
  userId: any;
  successMessage: any;
  errorMessage: any;
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookingService: Booking,
    private trekService: TourDetails,
    private auth: Auth,
    private authModal: AuthModalService,
    private router: Router,
  ) {}

  ngOnInit() {
    // Get trek ID from route
    this.route.params.subscribe((params) => {
      this.trekId = +params["id"];
      if (this.trekId) {
        this.loadTrekData();
      }
    });
  }

  loadTrekData() {
    this.isLoading = true;

    this.trekService.getTrekById(this.trekId).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.trek = response.data || [];

          // Convert single batch to array for consistent handling
          if (this.trek.batch && !Array.isArray(this.trek.batch)) {
            this.batches = [this.trek.batch];
          } else if (this.trek.batches) {
            this.batches = this.trek.batches;
          } else {
            this.batches = [];
          }

          // Now you can safely use find
          const availableBatch = this.batches.find(
            (b: any) => b.status === "active" && b.availableSlots > 0,
          );

          if (availableBatch) {
            // Use the correct property name from your API response
            const batchIdValue = availableBatch.batchId || availableBatch.id;
            this.booking.batchId = batchIdValue;
            this.onBatchSelect(batchIdValue);
          }

          const token = sessionStorage.getItem("token");

          let user: any = {};

          if (token) {
            try {
              user = JSON.parse(atob(token.split(".")[1]));
            } catch (e) {
              user = {};
            }
          }

          this.booking.name = user.name || "";
          this.booking.email = user.email || "";
          this.booking.phone = user.phone || "";
        }
        this.isLoading = false;
      },
      error: (error) => {
       
        this.isLoading = false;
      },
    });
  }

  onBatchSelect(batchId: number | string) {
    // Convert to number if it's a string
    const numericBatchId =
      typeof batchId === "string" ? parseInt(batchId) : batchId;

    // Try to find by batchId first, then by id
    this.selectedBatch = this.batches.find(
      (b) => b.batchId === numericBatchId || b.id === numericBatchId,
    );

    if (this.selectedBatch) {
      this.booking.date = this.selectedBatch.startDate;
      // Update the batchId in booking to match
      this.booking.batchId =
        this.selectedBatch.batchId || this.selectedBatch.id;
    }
  }

  get basePrice(): number {
    if (!this.selectedBatch) return 0;
    return (this.selectedBatch.price || 0) * this.booking.participants;
  }

  get addOnsPrice(): number {
    return (
      this.addOns
        .filter((addon) => addon.selected)
        .reduce((sum, addon) => sum + addon.price, 0) *
      this.booking.participants
    );
  }

  get totalPrice(): number {
    return this.basePrice + this.addOnsPrice;
  }

  nextStep() {
    // Validate current step
    if (this.currentStep === 1) {
      if (!this.booking.batchId || this.booking.participants < 1) {
        alert("Please select a date and number of participants");
        return;
      }

      if (
        this.selectedBatch &&
        this.booking.participants > this.selectedBatch.availableSlots
      ) {
        alert(`Only ${this.selectedBatch.availableSlots} slots available`);
        return;
      }
    }

    if (this.currentStep === 2) {
      if (
        !this.booking.name ||
        !this.booking.email ||
        !this.booking.phone ||
        !this.booking.emergencyContact
      ) {
        alert("Please fill all required fields");
        return;
      }

      // Require authentication before moving to review/payment
      if (!this.auth.isLoggedIn()) {
        // open login modal (Bootstrap-backed) and proceed on success
        this.authModal
          .openLogin()
          .then((result: any) => {
            if (result && result.success) {
              this.currentStep++;
            }
          })
          .catch(() => {
            // cancelled or failed - do nothing
          });
        return;
      }
    }

    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onParticipantsInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = Number(input.value);

    if (!this.selectedBatch) return;

    const max = this.selectedBatch.availableSlots;

    // clamp logic
    if (value > max) value = max;

    // update model + input
    this.booking.participants = value;
    input.value = value.toString();
  }

  proceedToPayment() {
    this.successMessage = "";
    this.errorMessage = "";
    this.isSubmitting = true;

    const token = sessionStorage.getItem("token");

    let user: any = {};

    if (token) {
      try {
        user = JSON.parse(atob(token.split(".")[1]));
        this.userId = user.id;
      } catch (e) {
        user = {};
      }
    }

    const bookingData: BookingData = {
      userId: this.userId,
      trekId: this.trekId,
      trekName: this.trek.name,
      batchId: this.selectedBatch.batchId || this.selectedBatch.id,
      startDate: this.selectedBatch.startDate,
      endDate: this.selectedBatch.endDate,
      price: this.selectedBatch.price,
      availableSlots: this.selectedBatch.availableSlots,
      participants: this.booking.participants,
      selectedAddOns: this.addOns.filter((addon) => addon.selected),
      personalInfo: {
        name: this.booking.name,
        email: this.booking.email,
        phone: this.booking.phone,
        emergencyContact: this.booking.emergencyContact,
        specialRequests: this.booking.specialRequests,
      },
    };

    // Save to service
    this.bookingService.setBookingData(bookingData).subscribe((res: any) => {
      if (res.success == true) {
        this.successMessage = res.message || "Booking successful 🎉";

        setTimeout(() => {
          this.resetBooking();
          this.successMessage = "";
          this.isSubmitting = false;
          this.router.navigateByUrl("");
        }, 1500);
      } else {
        this.errorMessage = res.message || "Booking failed";
        setTimeout(() => {
          this.resetBooking();
          this.errorMessage = "";
          this.isSubmitting = false;
        }, 1500);
      }
    });
  }

  resetBooking() {
    this.currentStep = 1;
    const bookingData: BookingData = {
      userId: "",
      trekId: "",
      trekName: "",
      batchId: "",
      startDate: "",
      endDate: "",
      price: "",
      availableSlots: "",
      participants: "",
      selectedAddOns: [],
      personalInfo: {
        name: "",
        email: "",
        phone: "",
        emergencyContact: "",
        specialRequests: "",
      },
    };
  }
}
