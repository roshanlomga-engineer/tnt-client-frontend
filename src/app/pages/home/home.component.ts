import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styles: [`
    /* Hero */
    .hero-section {
      position: relative;
      min-height: 92vh;
      overflow: hidden;
    }

    .hero-bg {
      background-color: #1B3A5C;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2137 60%, #0a1828 100%);
      opacity: 0.95;
      z-index: 0;
    }

    .z-1 {
      z-index: 1;
    }

    .hero-desc {
      max-width: 640px;
      opacity: 0.9;
      font-size: 1.1rem;
    }

    .badge-feature {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .btn-cta-gold {
      background-color: #E8A838;
      color: #1B3A5C;
      border: none;
      font-weight: 600;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .btn-cta-gold:hover {
      background-color: #d4952e;
      color: #fff;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(232, 168, 56, 0.4);
    }

    .btn-outline-light {
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-outline-light:hover {
      transform: translateY(-2px);
    }

    /* Section Title */
    .section-title {
      color: #1B3A5C;
      position: relative;
      display: inline-block;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #E8A838;
      margin: 0.5rem auto 0;
      border-radius: 2px;
    }

    /* Service Cards */
    .service-card {
      border-radius: 16px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12) !important;
    }

    .service-icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1B3A5C, #2a5a8c);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #E8A838;
      font-size: 1.6rem;
      transition: all 0.3s ease;
    }

    .service-card:hover .service-icon {
      background: linear-gradient(135deg, #E8A838, #d4952e);
      color: #fff;
    }

    /* Feature Cards */
    .feature-card {
      border-radius: 16px;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1) !important;
    }

    .feature-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2E7D52, #3a9d68);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.4rem;
    }

    /* CTA Banner */
    .cta-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2137 100%);
    }
  `]
})
export default class HomeComponent {
  services = [
    { icon: 'fa-home', title: 'Live-in Maids', desc: 'Dedicated full-time domestic help for your household needs, trained and background-verified.' },
    { icon: 'fa-utensils', title: 'Cooks', desc: 'Professional cooks skilled in diverse cuisines to keep your kitchen running smoothly.' },
    { icon: 'fa-baby', title: 'Babysitters', desc: 'Caring and experienced babysitters to look after your little ones with love and attention.' },
    { icon: 'fa-building', title: 'Office Housekeeping', desc: 'Maintain a clean and hygienic workspace with our trained office housekeeping staff.' },
    { icon: 'fa-shield-alt', title: 'Security Guards', desc: 'Reliable and alert security personnel to safeguard your premises around the clock.' },
    { icon: 'fa-car', title: 'Drivers', desc: 'Licensed, experienced drivers for personal, family, or corporate transportation needs.' },
  ];

  features = [
    { icon: 'fa-user-check', title: 'Verified Professionals', desc: 'Every candidate undergoes thorough background checks and skill verification before deployment.' },
    { icon: 'fa-bolt', title: 'Quick Deployment', desc: 'Get trained manpower at your doorstep within 24 to 48 hours of your request.' },
    { icon: 'fa-sync-alt', title: 'Replacement Guarantee', desc: 'Not satisfied? We provide a hassle-free replacement at no extra cost.' },
    { icon: 'fa-headset', title: '24/7 Support', desc: 'Our support team is always available to address your concerns and queries.' },
  ];
}
