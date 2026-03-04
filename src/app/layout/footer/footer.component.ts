import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SITE_NAV_LINKS, SITE_SOCIAL_LINKS, SITE_TRUST_ITEMS } from '../site.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports:[IonicModule, RouterLink, CommonModule]
})
export class FooterComponent  implements OnInit {
  readonly navLinks = SITE_NAV_LINKS;
  readonly socialLinks = SITE_SOCIAL_LINKS;
  readonly trustItems = SITE_TRUST_ITEMS;
  readonly currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {}

}
