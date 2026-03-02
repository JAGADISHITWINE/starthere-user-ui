import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TourDetails } from "../tour-details/tour-details";
import { Booking, BookingData } from "./booking";
import { Auth } from "../core/auth";
import { TokenService } from 'src/app/core/token.service';
import { AuthModalService } from "../auth/auth-modal.service";
import { Sessionexpired } from "../auth/sessionexpired/sessionexpired";
import { OnlyNumberDirective } from "../shared/Only number.directive";

// Participant interface
interface Participant {
  name: string;
  age: number | null;
  gender: string;
  idType: string;
  idNumber: string;
  phone: string;
  medicalInfo: string;
  idError?: string;
  ageError?: string;
}

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
    OnlyNumberDirective
  ],
})
export class BookingComponent implements OnInit {
  trekId: number = 0;
  currentStep: number = 1;
  isLoading: boolean = true;
  termsAccepted: boolean = true;

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

  // Participants array
  participants: Participant[] = [];

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
    private tokenService: TokenService,
    private sessionService: Sessionexpired,
  ) { }

  ngOnInit() {
    // Get trek ID from route
    this.route.params.subscribe((params) => {
      this.trekId = +params["id"];
      if (this.trekId) {
        this.loadTrekData();
      }
    });
    if (!this.booking.participants) {
      this.booking.participants = 1;
    }
  }


  loadTrekData() {
    this.isLoading = true;

    this.trekService.getTrekById(this.trekId).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.trek = response.data || [];
          console.log("Trek data loaded:", this.trek);

          // Convert single batch to array for consistent handling
          if (this.trek.batch && !Array.isArray(this.trek.batch)) {
            this.batches = [this.trek.batch];
          } else if (this.trek.batches) {
            this.batches = this.trek.batches;
          } else {
            this.batches = [];
          }

          // Find available batch
          const availableBatch = this.batches.find(
            (b: any) => b.status === "active" && b.availableSlots > 0,
          );

          if (availableBatch) {
            const batchIdValue = availableBatch.batchId || availableBatch.id;
            this.booking.batchId = batchIdValue;
            this.onBatchSelect(batchIdValue);
          }

          // Pre-fill user data from token (centralized)
          const decoded = this.tokenService.decode();
          this.booking.name = decoded?.name || "";
          this.booking.email = decoded?.email || "";
          this.booking.phone = decoded?.phone || "";

          // Initialize participants array
          this.initializeParticipants();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Load trek error:', error);
        this.isLoading = false;
      },
    });
  }

  onBatchSelect(batchId: number | string) {
    const numericBatchId =
      typeof batchId === "string" ? parseInt(batchId) : batchId;

    this.selectedBatch = this.batches.find(
      (b) => b.batchId === numericBatchId || b.id === numericBatchId,
    );

    if (this.selectedBatch) {
      this.booking.date = this.selectedBatch.startDate;
      this.booking.batchId =
        this.selectedBatch.batchId || this.selectedBatch.id;
    }
  }

  /**
   * Initialize participants array based on number of participants
   */
  initializeParticipants() {
    this.participants = [];

    for (let i = 0; i < this.booking.participants; i++) {
      if (i === 0) {
        // First participant is the primary contact
        this.participants.push({
          name: this.booking.name,
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: this.booking.phone,
          medicalInfo: "",
        });
      } else {
        // Additional participants
        this.participants.push({
          name: "",
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: "",
          medicalInfo: "",
        });
      }
    }
  }

  /**
   * Update participants array when number changes
   */
  onParticipantsInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = Number(input.value);

    if (!this.selectedBatch) return;

    const max = this.selectedBatch.availableSlots;

    // Clamp to max available
    if (value > max) value = max;
    if (value < 1) value = 1;

    // Update model
    this.booking.participants = value;
    input.value = value.toString();

    // Reinitialize participants array
    this.initializeParticipants();
  }

  /**
   * Sync primary contact data to first participant
   */
  syncPrimaryContactToParticipant() {
    if (this.participants.length > 0) {
      this.participants[0].name = this.booking.name;
      this.participants[0].phone = this.booking.phone;
    }
  }

  /**
   * Check if all participants have required fields filled
   */
  areAllParticipantsValid(): boolean {
    return this.participants.every(participant =>
      participant.name.trim() !== '' &&
      participant.age !== null &&
      participant.age > 0 &&
      participant.gender !== '' &&
      participant.idType !== '' &&
      participant.idNumber.trim() !== ''
    );
  }

  /**
   * Check if can proceed to next step
   */
  canProceedToNextStep(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.booking.batchId > 0 &&
          this.booking.participants >= 1 &&
          this.selectedBatch !== null;

      case 2:
        return this.booking.name.trim() !== '' &&
          this.booking.email.trim() !== '' &&
          this.booking.phone.length === 10 &&
          this.booking.emergencyContact.length === 10;

      case 3:
        return this.areAllParticipantsValid();

      default:
        return true;
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
    if (!this.canProceedToNextStep()) {
      if (this.currentStep === 1) {
        alert("Please select a batch and number of participants");
      } else if (this.currentStep === 2) {
        alert("Please fill all required contact information");
      } else if (this.currentStep === 3) {
        alert("Please fill all required participant details");
      }
      return;
    }

    // Check authentication before step 3
    if (this.currentStep === 2) {
      // Sync primary contact to first participant before moving forward
      this.syncPrimaryContactToParticipant();

      const hasToken = !!this.tokenService.getToken();     // token exists (even if expired)
      const isValid = this.tokenService.isValid();         // token exists AND not expired

      if (hasToken && !isValid) {
        // Token exists but is expired → show session expired modal
        this.sessionService.notifyExpired();
        return;
      }

      if (!hasToken) {
        // No token at all → fresh login flow
        this.authModal
          .openLogin()
          .then((result: any) => {
            if (result && result.success) {
              this.currentStep++;
            }
          })
          .catch(() => {
            // User cancelled login
          });
        return;
      }
    }

    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  proceedToPayment() {
    this.successMessage = "";
    this.errorMessage = "";
    this.isSubmitting = true;

    // Centralized token handling
    this.userId = this.tokenService.getUserId();

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
      participantDetails: this.participants, // NEW: Include participant details
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
          this.errorMessage = "";
          this.isSubmitting = false;
        }, 1500);
      }
    });
  }

  resetBooking() {
    this.currentStep = 1;
    this.booking = {
      batchId: 0,
      date: "",
      participants: 1,
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      specialRequests: "",
    };
    this.participants = [];
    this.initializeParticipants();
  }

decrementParticipants() {
  if (this.booking.participants > 1) {
    this.booking.participants--;
    this.initializeParticipants();  // ← add this
  }
}

incrementParticipants() {
  if (this.booking.participants < this.selectedBatch.availableSlots) {
    this.booking.participants++;
    this.initializeParticipants();  // ← add this
  }
}

validateId(participant: Participant) {
  participant.idError = '';
  if (!participant.idType || !participant.idNumber) return;

  const raw = participant.idNumber.replace(/\s/g, '');

  switch (participant.idType) {
    case 'Aadhar':
      if (!/^\d{12}$/.test(raw))
        participant.idError = 'Aadhaar must be exactly 12 digits';
      break;

    case 'PAN':
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(raw))
        participant.idError = 'Invalid PAN format (e.g. ABCDE1234F)';
      break;

    case 'Passport':
      if (!/^[A-Z][0-9]{7}$/.test(raw))
        participant.idError = 'Invalid Passport format (e.g. A1234567)';
      break;

    case 'Driving License':
      if (raw.length < 10)
        participant.idError = 'Driving License must be at least 10 characters';
      break;

    case 'Voter ID':
      if (!/^[A-Z]{3}[0-9]{7}$/.test(raw))
        participant.idError = 'Invalid Voter ID format (e.g. ABC1234567)';
      break;
  }
}

formatIdInput(participant: Participant) {
  if (!participant.idType) return;
  let value = participant.idNumber || '';

  switch (participant.idType) {
    case 'Aadhar':
      // Keep only digits, max 12, format as XXXX XXXX XXXX
      const digits = value.replace(/\D/g, '').substring(0, 12);
      participant.idNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
      break;

    case 'PAN':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
      break;

    case 'Passport':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8);
      break;

    case 'Driving License':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 15);
      break;

    case 'Voter ID':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
      break;
  }

  this.validateId(participant);
}

getIdMaxLength(idType: string): number {
  switch (idType) {
    case 'Aadhar':          return 14; // 12 digits + 2 spaces
    case 'PAN':             return 10;
    case 'Passport':        return 8;
    case 'Driving License': return 15;
    case 'Voter ID':        return 10;
    default:                return 20;
  }
}

validateAge(participant: Participant) {

  participant.ageError = '';

  if (participant.age === null) return;

  if (participant.age < 12) {
    participant.ageError = 'Minimum age is 12 years';
  }
}


}