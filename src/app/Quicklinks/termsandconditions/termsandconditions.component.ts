import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TermsandconditionsComponent implements OnInit {

  pageType: 'terms' | 'cancellation' = 'terms';
  openIndex: number | null = null;
  constructor(private router: Router) { }

  ngOnInit() {
    this.pageType = this.router.url.includes('cancellation')
      ? 'cancellation'
      : 'terms';
  }
  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
