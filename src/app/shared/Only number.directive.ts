import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumber]',
  standalone: true,
})
export class OnlyNumberDirective {

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    const allowed = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End',
    ];

    if (allowed.includes(e.key)) return;

    // Block anything that isn't a digit
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(e: ClipboardEvent): void {
    const pasted = e.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pasted)) {
      e.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInput(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    // Strip any non-digit that slipped through (e.g. autofill)
    input.value = input.value.replace(/\D/g, '');
  }
}