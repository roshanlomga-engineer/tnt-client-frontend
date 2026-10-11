import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styles: [`
    /* Brand Colors */
    :host {
      --primary: #1B3A5C;
      --secondary: #E8A838;
      --accent: #2E7D52;
    }

    /* Hero Banner */
    .hero-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2440 60%, #162f4a 100%);
      min-height: 320px;
      padding: 80px 0;
    }

    .hero-banner h1 {
      letter-spacing: 1px;
    }

    .hero-banner .lead {
      opacity: 0.85;
      font-size: 1.2rem;
    }

    /* Section Titles */
    .section-title {
      color: #1B3A5C;
      font-weight: 700;
      position: relative;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #E8A838;
      margin: 12px auto 0;
      border-radius: 2px;
    }

    /* Commitment Section */
    .commitment-section {
      background-color: #f8f9fa;
    }

    .commitment-item {
      background: #ffffff;
      border-radius: 8px;
      transition: box-shadow 0.2s ease;
    }

    .commitment-item:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .checkmark-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: rgba(46, 125, 82, 0.1);
      color: #2E7D52;
      border-radius: 50%;
      font-weight: 700;
      font-size: 0.85rem;
      margin-top: 2px;
    }

    /* Vision Card */
    .vision-card {
      border-left: 4px solid #E8A838;
      background: #fffaf0;
      border-radius: 0 8px 8px 0;
      color: #1B3A5C;
    }

    /* Mission Section */
    .mission-section {
      background-color: #f8f9fa;
    }

    .mission-tagline {
      color: #E8A838;
      font-size: 1.5rem;
    }
  `]
})
export default class AboutComponent {
  commitmentItems: string[] = [
    'Thorough background verification',
    'Skill-based training programs',
    'Regular performance monitoring',
    'Quick replacement guarantee',
    '24/7 customer support',
    'Fair treatment of all workers',
    'Compliance with all labor regulations'
  ];
}
