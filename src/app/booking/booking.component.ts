import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
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
import { DropdownOption, DropdownService } from "../core/dropdown.service";
import { PublicRouteIdService } from "../core/public-route-id.service";
import { environment } from "src/environments/environment";

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
  phoneError?: string;
}

interface BookingAddOn {
  id: number;
  name: string;
  price: number;
  selected: boolean;
  quantity: number;
}

interface AvailableCoupon {
  id: number;
  code: string;
  discountType: "percentage" | "flat";
  discountValue: number;
  minBookingAmount: number;
  maxDiscountAmount: number | null;
  endDate: string | null;
  usageLimit: number | null;
  usageCount: number;
  isUsedByUser?: boolean;
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
export class BookingComponent implements OnInit, OnDestroy {
  readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  trekId: number = 0;
  routeRef: string = "";
  currentStep: number = 1;
  isLoading: boolean = true;
  termsAccepted: boolean = true;
  couponCode: string = "";
  couponValidationError: string = "";
  couponValidationSuccess: string = "";
  couponDiscountAmount: number = 0;
  isCouponValidating: boolean = false;
  availableCoupons: AvailableCoupon[] = [];
  couponListError: string = "";
  private couponValidationTimer: ReturnType<typeof setTimeout> | null = null;

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
  addOns: BookingAddOn[] = [];

  userId: any;
  successMessage: any;
  errorMessage: any;
  isSubmitting: boolean = false;
  private successMessageTimer: ReturnType<typeof setTimeout> | null = null;
  private errorMessageTimer: ReturnType<typeof setTimeout> | null = null;
  genderOptions: DropdownOption[] = [];
  idTypeOptions: DropdownOption[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookingService: Booking,
    private trekService: TourDetails,
    private auth: Auth,
    private authModal: AuthModalService,
    private router: Router,
    private tokenService: TokenService,
    private sessionService: Sessionexpired,
    private dropdownService: DropdownService,
    private publicRouteId: PublicRouteIdService,
  ) { }

  ngOnInit() {
    this.loadDropdownOptions();

    // Get trek ID from route
    this.route.params.subscribe((params) => {
      const ref = String(params["id"] || "");
      this.routeRef = ref;
      const resolvedId = this.publicRouteId.resolve(ref);
      this.trekId = Number(resolvedId || 0);
      if (this.routeRef) {
        this.loadTrekData();
      }
    });
    if (!this.booking.participants) {
      this.booking.participants = 1;
    }
  }

  ngOnDestroy() {
    if (this.couponValidationTimer) {
      clearTimeout(this.couponValidationTimer);
      this.couponValidationTimer = null;
    }
    if (this.successMessageTimer) {
      clearTimeout(this.successMessageTimer);
      this.successMessageTimer = null;
    }
    if (this.errorMessageTimer) {
      clearTimeout(this.errorMessageTimer);
      this.errorMessageTimer = null;
    }
  }

  private loadDropdownOptions() {
    const genderFallback: DropdownOption[] = [
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
      { value: 'Other', label: 'Other' },
    ];

    const idTypeFallback: DropdownOption[] = [
      { value: 'Aadhar', label: 'Aadhar Card' },
      { value: 'PAN', label: 'PAN Card' },
      { value: 'Passport', label: 'Passport' },
      { value: 'Driving License', label: 'Driving License' },
      { value: 'Voter ID', label: 'Voter ID' },
    ];

    this.dropdownService.getOptions('gender', genderFallback).subscribe((options) => {
      this.genderOptions = options;
    });

    this.dropdownService.getOptions('id-types', idTypeFallback).subscribe((options) => {
      this.idTypeOptions = options;
    });
  }


  loadTrekData() {
    this.isLoading = true;

    this.trekService.getTrekById(this.routeRef || this.trekId).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.trek = response.data || [];
          this.trekId = Number(this.trek?.batch?.batchId || this.trek?.batch?.id || this.trekId || 0);

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
          this.userId = this.tokenService.getUserId();

          this.initializeAddOns();
          this.loadAvailableCoupons();
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

  private loadAvailableCoupons() {
    if (!this.trekId) return;

    this.bookingService.getAvailableCoupons(this.trekId, this.userId).subscribe({
      next: (res: any) => {
        this.availableCoupons = Array.isArray(res?.data) ? res.data : [];
        this.couponListError = "";
      },
      error: () => {
        this.availableCoupons = [];
        this.couponListError = "Unable to load coupons right now";
      }
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
      this.initializeAddOns();
      this.scheduleCouponValidation();
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

  initializeAddOns() {
    const rawAddOns =
      this.selectedBatch?.addOns ||
      this.selectedBatch?.addons ||
      this.selectedBatch?.add_ons ||
      this.trek?.addOns ||
      this.trek?.addons ||
      this.trek?.add_ons ||
      [];

    if (Array.isArray(rawAddOns) && rawAddOns.length > 0) {
      this.addOns = rawAddOns
        .map((item: any, index: number) => ({
          id: Number(item.id || item.addon_id || index + 1),
          name: String(item.name || item.addon_name || item.title || "").trim(),
          price: Number(item.price || item.unit_price || 0),
          selected: false,
          quantity: 0,
        }))
        .filter((addon: BookingAddOn) => addon.name && addon.price > 0);
      return;
    }

    this.addOns = [
      { id: 1, name: "Trekking Poles", price: 200, selected: false, quantity: 0 },
      { id: 2, name: "Sleeping Bag", price: 300, selected: false, quantity: 0 },
      { id: 3, name: "Travel Insurance", price: 500, selected: false, quantity: 0 },
    ];
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
    this.syncAddOnQuantitiesWithParticipants();
    this.scheduleCouponValidation();
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
    return this.participants.every((participant, index) =>
      participant.name.trim() !== '' &&
      participant.age !== null &&
      participant.age > 0 &&
      participant.gender !== '' &&
      participant.idType !== '' &&
      participant.idNumber.trim() !== '' &&
      !participant.idError &&
      !participant.ageError &&
      (index === 0 || this.isValidPhone(participant.phone))
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
    return this.addOns.reduce(
      (sum, addon) => sum + addon.price * (addon.quantity || 0),
      0
    );
  }

  get totalPrice(): number {
    return this.basePrice + this.addOnsPrice;
  }

  get payablePrice(): number {
    return Math.max(0, this.totalPrice - this.couponDiscountAmount);
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
      if (this.currentStep === 4) {
        this.scheduleCouponValidation();
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  proceedToPayment() {
    if (this.isCouponValidating) {
      this.showTransientMessage("error", "Please wait, validating coupon...", 1800);
      return;
    }

    if (this.couponCode.trim() && this.couponValidationError) {
      this.showTransientMessage("error", this.couponValidationError, 2200);
      return;
    }

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
      couponCode: this.couponCode.trim() ? this.couponCode.trim().toUpperCase() : undefined,
      selectedAddOns: this.addOns
        .filter((addon) => addon.quantity > 0)
        .map((addon) => ({
          id: addon.id,
          name: addon.name,
          price: addon.price,
          quantity: addon.quantity,
          selected: true,
        })),
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
    this.bookingService.setBookingData(bookingData).subscribe({
      next: async (res: any) => {
        if (res.success == true) {
          this.showTransientMessage("success", res.message || "Booking successful", 2000);

          setTimeout(() => {
            this.resetBooking();
            this.successMessage = "";
            this.isSubmitting = false;
            this.router.navigateByUrl("");
          }, 1500);
          return;
        }

        const message = String(res?.message || "Booking failed");
        this.showTransientMessage("error", message, 2500);
        this.isSubmitting = false;
      },
      error: async () => {
        this.isSubmitting = false;
        this.showTransientMessage(
          "error",
          "Something went wrong while booking. Please try again.",
          2500
        );
      }
    });
  }

  private showTransientMessage(
    type: "success" | "error",
    message: string,
    durationMs: number = 2500
  ) {
    if (type === "success") {
      this.successMessage = message;
      this.errorMessage = "";
      if (this.successMessageTimer) clearTimeout(this.successMessageTimer);
      this.successMessageTimer = setTimeout(() => {
        this.successMessage = "";
      }, durationMs);
      return;
    }

    this.errorMessage = message;
    this.successMessage = "";
    if (this.errorMessageTimer) clearTimeout(this.errorMessageTimer);
    this.errorMessageTimer = setTimeout(() => {
      this.errorMessage = "";
    }, durationMs);
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
    this.addOns = this.addOns.map((addon) => ({
      ...addon,
      selected: false,
      quantity: 0,
    }));
    this.couponCode = "";
    this.couponValidationError = "";
    this.couponValidationSuccess = "";
    this.couponDiscountAmount = 0;
    this.isCouponValidating = false;
  }

decrementParticipants() {
  if (this.booking.participants > 1) {
    this.booking.participants--;
    this.initializeParticipants();  // ← add this
    this.syncAddOnQuantitiesWithParticipants();
    this.scheduleCouponValidation();
  }
}

incrementParticipants() {
  if (this.booking.participants < this.selectedBatch.availableSlots) {
    this.booking.participants++;
    this.initializeParticipants();  // ← add this
    this.syncAddOnQuantitiesWithParticipants();
    this.scheduleCouponValidation();
  }
}

get participantCountOptions(): number[] {
  return Array.from(
    { length: (this.booking.participants || 1) + 1 },
    (_, index) => index
  );
}

get tourDetailsRouteRef(): string {
  return this.routeRef || (this.publicRouteId.encode(this.trekId) || String(this.trekId || ''));
}

onAddonQuantityChange(addon: BookingAddOn, value: string | number) {
  const numericValue = Math.max(0, Math.min(this.booking.participants, Number(value) || 0));
  addon.quantity = numericValue;
  addon.selected = numericValue > 0;
  this.scheduleCouponValidation();
}

private syncAddOnQuantitiesWithParticipants() {
  this.addOns.forEach((addon) => {
    if (addon.quantity > this.booking.participants) {
      addon.quantity = this.booking.participants;
    }
    addon.selected = addon.quantity > 0;
  });
  this.scheduleCouponValidation();
}

private isValidPhone(phone: string): boolean {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length === 10;
}

validateParticipantPhone(participant: Participant, isPrimary: boolean = false) {
  participant.phoneError = "";

  // Primary participant phone is auto-filled from contact info in Step 2.
  if (isPrimary) return;

  if (!this.isValidPhone(participant.phone)) {
    participant.phoneError = "Phone number must be exactly 10 digits";
  }
}

onCouponCodeInput(value: string) {
  this.couponCode = String(value || "").toUpperCase().replace(/\s+/g, "");
  this.couponValidationError = "";
  this.couponValidationSuccess = "";
  this.couponDiscountAmount = 0;
  this.scheduleCouponValidation();
}

private scheduleCouponValidation() {
  if (this.couponValidationTimer) {
    clearTimeout(this.couponValidationTimer);
    this.couponValidationTimer = null;
  }

  if (this.currentStep !== 4 || !this.couponCode.trim()) {
    this.isCouponValidating = false;
    if (!this.couponCode.trim()) {
      this.couponValidationError = "";
      this.couponValidationSuccess = "";
      this.couponDiscountAmount = 0;
    }
    return;
  }

  this.couponValidationTimer = setTimeout(() => {
    this.validateCouponRealtime();
  }, 450);
}

async copyCouponCode(code: string) {
  const value = String(code || "").trim().toUpperCase();
  if (!value) return;

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const input = document.createElement("input");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    this.onCouponCodeInput(value);
    this.showTransientMessage("success", `Coupon ${value} copied`, 1800);
  } catch {
    this.showTransientMessage("error", "Unable to copy coupon", 1800);
  }
}

getCouponLabel(coupon: AvailableCoupon): string {
  if (coupon.discountType === "percentage") {
    return `${Number(coupon.discountValue)}% OFF`;
  }
  return `₹${Number(coupon.discountValue)} OFF`;
}

private validateCouponRealtime() {
  if (!this.selectedBatch || !this.couponCode.trim()) return;

  this.isCouponValidating = true;
  this.couponValidationError = "";
  this.couponValidationSuccess = "";

  const userId = this.tokenService.getUserId();
  const payload = {
    userId,
    trekId: this.trekId,
    participants: this.booking.participants,
    price: Number(this.selectedBatch.price || 0),
    couponCode: this.couponCode.trim().toUpperCase(),
    selectedAddOns: this.addOns
      .filter((addon) => addon.quantity > 0)
      .map((addon) => ({
        id: addon.id,
        price: addon.price,
        quantity: addon.quantity,
        selected: addon.quantity > 0,
      })),
  };

  this.bookingService.validateCoupon(payload).subscribe({
    next: (res: any) => {
      this.isCouponValidating = false;
      const valid = !!res?.data?.valid;
      if (!res?.success || !valid) {
        this.couponDiscountAmount = 0;
        this.couponValidationError = String(res?.data?.message || res?.message || "Invalid coupon");
        return;
      }

      this.couponDiscountAmount = Number(res?.data?.discountAmount || 0);
      this.couponValidationSuccess = this.couponDiscountAmount > 0
        ? `Coupon applied. You save ₹${this.couponDiscountAmount.toFixed(0)}`
        : String(res?.data?.message || "Coupon applied");
      this.couponValidationError = "";
    },
    error: () => {
      this.isCouponValidating = false;
      this.couponDiscountAmount = 0;
      this.couponValidationError = "Unable to validate coupon right now";
    }
  });
}

validateId(participant: Participant) {
  participant.idError = '';
  if (!participant.idType || !participant.idNumber) return;

  const raw = participant.idNumber.replace(/\s/g, '');
  const idType = this.normalizeIdType(participant.idType);

  switch (idType) {
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
  const idType = this.normalizeIdType(participant.idType);

  switch (idType) {
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
  switch (this.normalizeIdType(idType)) {
    case 'Aadhar':          return 14; // 12 digits + 2 spaces
    case 'PAN':             return 10;
    case 'Passport':        return 8;
    case 'Driving License': return 15;
    case 'Voter ID':        return 10;
    default:                return 20;
  }
}

private normalizeIdType(idType: string): string {
  const value = (idType || '').trim().toLowerCase();

  if (value === 'aadhar' || value === 'aadhaar') return 'Aadhar';
  if (value === 'pan' || value === 'pan card') return 'PAN';
  if (value === 'passport') return 'Passport';
  if (value === 'driving license' || value === 'driving licence') return 'Driving License';
  if (value === 'voter id' || value === 'voterid') return 'Voter ID';

  return idType;
}

validateAge(participant: Participant) {

  participant.ageError = '';

  if (participant.age === null) return;

  if (participant.age < 12) {
    participant.ageError = 'Minimum age is 12 years';
  }
}


}
