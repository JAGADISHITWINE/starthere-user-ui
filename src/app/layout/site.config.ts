export interface SiteNavLink {
  label: string;
  route: string;
  icon: string;
  exact?: boolean;
}

export interface SiteContactItem {
  label: string;
  value: string;
  icon: string;
  href?: string;
}

export interface SiteSocialLink {
  label: string;
  href: string;
  iconClass: string;
  styleClass: string;
}

export interface SiteTrustItem {
  label: string;
  icon: string;
}

export const SITE_NAV_LINKS: SiteNavLink[] = [
  { label: 'Home', route: '/', icon: 'bi bi-house-door', exact: true },
  { label: 'About Us', route: '/about', icon: 'bi bi-people' },
  { label: 'Blog', route: '/blog', icon: 'bi bi-journal-text' },
  { label: "FAQ's", route: '/faqs', icon: 'bi bi-chat-square-dots' },
  { label: 'Cancellation', route: '/cancellation', icon: 'bi bi-shield-check' },
  { label: 'Terms & Conditions', route: '/termsandcondition', icon: 'bi bi-file-earmark-text' },
];

export const SITE_CONTACT_ITEMS: SiteContactItem[] = [
  {
    label: 'Location',
    value: 'Bengaluru, Karnataka',
    icon: 'fas fa-map-marker-alt',
  },
  {
    label: 'Phone',
    value: '+91 98765 43210',
    icon: 'fas fa-phone',
    href: 'tel:+919876543210',
  },
  {
    label: 'Email',
    value: 'info@karnataka-adventures.com',
    icon: 'far fa-envelope-open',
    href: 'mailto:info@karnataka-adventures.com',
  },
];

export const SITE_SOCIAL_LINKS: SiteSocialLink[] = [
  { label: 'Facebook', href: '#', iconClass: 'fab fa-facebook-f', styleClass: 'si-facebook' },
  { label: 'Instagram', href: '#', iconClass: 'fab fa-instagram', styleClass: 'si-instagram' },
  { label: 'YouTube', href: '#', iconClass: 'fab fa-youtube', styleClass: 'si-youtube' },
  { label: 'WhatsApp', href: '#', iconClass: 'fab fa-whatsapp', styleClass: 'si-whatsapp' },
];

export const SITE_TRUST_ITEMS: SiteTrustItem[] = [
  { label: '100% Safe Treks', icon: 'fas fa-shield-alt' },
  { label: 'Certified Guides', icon: 'fas fa-certificate' },
  { label: '4.9★ Rated on Google', icon: 'fas fa-star' },
];
