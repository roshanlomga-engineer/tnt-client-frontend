import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styles: [`
    .hero-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2340 100%);
      color: #fff;
      padding: 5rem 0;
      text-align: center;
    }
    .hero-banner h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .hero-banner p {
      font-size: 1.2rem;
      opacity: 0.85;
      max-width: 600px;
      margin: 0 auto;
    }
    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1B3A5C;
      margin-bottom: 0.5rem;
    }
    .section-subtitle {
      color: #666;
      margin-bottom: 2.5rem;
    }
    .service-card {
      border: none;
      border-radius: 12px;
      padding: 2rem 1.5rem;
      text-align: center;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
    }
    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(27, 58, 92, 0.15);
    }
    .icon-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      font-size: 1.6rem;
      color: #fff;
    }
    .icon-circle.primary {
      background: linear-gradient(135deg, #1B3A5C, #2a5580);
    }
    .icon-circle.secondary {
      background: linear-gradient(135deg, #E8A838, #f0be5e);
    }
    .icon-circle.accent {
      background: linear-gradient(135deg, #2E7D52, #3a9966);
    }
    .service-card h5 {
      font-weight: 600;
      color: #1B3A5C;
      margin-bottom: 0.75rem;
    }
    .service-card p {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0;
    }
    .households-section {
      background: #f8f9fa;
      padding: 5rem 0;
    }
    .businesses-section {
      background: #fff;
      padding: 5rem 0;
    }
    .divider-line {
      width: 60px;
      height: 4px;
      background: #E8A838;
      border-radius: 2px;
      margin: 0 auto 1rem;
    }
  `]
})
export default class ServicesComponent {
  householdServices: ServiceCard[] = [
    { icon: 'fa-home', title: 'Live-in Maids', description: 'Dedicated full-time domestic help residing at your home, ensuring round-the-clock assistance with daily chores.' },
    { icon: 'fa-clock', title: 'Part-time Maids', description: 'Flexible part-time cleaning and household support tailored to your schedule and specific needs.' },
    { icon: 'fa-utensils', title: 'Cooks', description: 'Skilled cooks to prepare fresh, hygienic, and delicious meals for your family every day.' },
    { icon: 'fa-baby', title: 'Babysitters / Nannies', description: 'Trained and caring childcare professionals to look after your little ones with love and attention.' },
    { icon: 'fa-hand-holding-heart', title: 'Elderly Caregivers', description: 'Compassionate caregivers experienced in assisting senior family members with daily activities.' },
    { icon: 'fa-broom', title: 'Housekeepers', description: 'Thorough housekeeping services to keep your home spotless, organized, and welcoming.' },
    { icon: 'fa-car-side', title: 'Drivers', description: 'Reliable and experienced personal drivers for safe daily commutes and errands.' },
  ];

  businessServices: ServiceCard[] = [
    { icon: 'fa-building', title: 'Office Housekeeping', description: 'Professional cleaning and maintenance services to keep your office environment pristine and productive.' },
    { icon: 'fa-tools', title: 'Facility Management', description: 'End-to-end facility management solutions covering maintenance, cleaning, and operational support.' },
    { icon: 'fa-industry', title: 'Industrial & Factory', description: 'Specialized housekeeping for industrial plants and factories meeting safety and hygiene standards.' },
    { icon: 'fa-hospital', title: 'Hospital Housekeeping', description: 'Sanitization and hygiene-focused housekeeping for hospitals and healthcare facilities.' },
    { icon: 'fa-shield-alt', title: 'Security Guards', description: 'Trained and verified security personnel to safeguard your business premises around the clock.' },
    { icon: 'fa-hotel', title: 'Guest House / Hotel', description: 'Hospitality-grade housekeeping staff for guest houses, hotels, and serviced apartments.' },
    { icon: 'fa-users-cog', title: 'Customized Staffing', description: 'Tailor-made staffing solutions designed to meet your unique business requirements.' },
  ];

  iconColors: string[] = ['primary', 'secondary', 'accent'];

  getIconColor(index: number): string {
    return this.iconColors[index % this.iconColors.length];
  }
}
