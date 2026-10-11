import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './how-it-works.component.html',
  styles: [`
    /* ===== Brand Colors ===== */
    :host {
      --primary: #1B3A5C;
      --secondary: #E8A838;
      --accent: #2E7D52;
      display: block;
    }

    /* ===== Hero Banner ===== */
    .hero-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2236 100%);
      min-height: 320px;
      padding: 80px 0;
    }

    .hero-banner h1 {
      letter-spacing: 1px;
    }

    .hero-banner .lead {
      font-size: 1.25rem;
      opacity: 0.85;
    }

    /* ===== Timeline Section ===== */
    .timeline-section {
      background-color: #f8f9fa;
    }

    .timeline-wrapper {
      position: relative;
    }

    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #E8A838, #2E7D52);
      transform: translateX(-50%);
      z-index: 0;
    }

    /* ===== Step Icon Wrapper ===== */
    .step-icon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
    }

    .step-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: #E8A838;
      line-height: 1;
      margin-bottom: 8px;
    }

    .step-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    /* ===== Step Card ===== */
    .step-card {
      max-width: 400px;
      padding: 24px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .step-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .step-title {
      color: #1B3A5C;
      font-size: 1.25rem;
      margin-bottom: 8px;
    }

    .step-description {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0;
    }

    /* ===== CTA Section ===== */
    .cta-section {
      background: linear-gradient(135deg, #2E7D52 0%, #1B3A5C 100%);
    }

    .btn-cta {
      background-color: #E8A838;
      color: #1B3A5C;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .btn-cta:hover {
      background-color: #d4952e;
      color: #fff;
      transform: scale(1.05);
    }

    /* ===== Mobile ===== */
    @media (max-width: 767.98px) {
      .hero-banner {
        min-height: 240px;
        padding: 60px 0;
      }

      .step-card {
        text-align: center;
        max-width: 100%;
      }

      .step-number {
        font-size: 2rem;
      }
    }
  `]
})
export default class HowItWorksComponent {
  steps: Step[] = [
    {
      number: '01',
      title: 'Requirement Understanding',
      description: 'We listen to your specific needs, preferences, and expectations to find the perfect match.',
      icon: 'fa-clipboard-list',
      iconBg: '#1B3A5C'
    },
    {
      number: '02',
      title: 'Screening & Verification',
      description: 'Every candidate undergoes thorough background checks, skill assessment, and reference verification.',
      icon: 'fa-search',
      iconBg: '#E8A838'
    },
    {
      number: '03',
      title: 'Training & Deployment',
      description: 'Selected professionals receive additional training before being deployed to your location.',
      icon: 'fa-graduation-cap',
      iconBg: '#2E7D52'
    },
    {
      number: '04',
      title: 'Ongoing Support & Replacement',
      description: 'We provide continuous support and quick replacement if you\'re not satisfied.',
      icon: 'fa-headset',
      iconBg: '#1B3A5C'
    }
  ];
}
