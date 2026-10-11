import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-migrant-support',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './migrant-support.component.html',
  styles: [`
    .hero-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2237 100%);
      min-height: 350px;
      padding: 80px 0;
    }

    .hero-banner h1 {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-banner .lead {
      color: #E8A838;
      font-weight: 500;
      letter-spacing: 2px;
    }

    .intro-text {
      color: #444;
    }

    .section-title {
      color: #1B3A5C;
    }

    .icon-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: rgba(46, 125, 82, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-circle i {
      font-size: 1.6rem;
      color: #2E7D52;
    }

    .support-card {
      border-radius: 12px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: default;
    }

    .support-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 24px rgba(27, 58, 92, 0.15) !important;
    }

    .support-card .card-title {
      color: #1B3A5C;
    }

    .closing-section {
      background: linear-gradient(135deg, #E8A838 0%, #d4952e 100%);
    }

    .closing-quote p {
      color: #1B3A5C;
      line-height: 1.6;
    }
  `]
})
export default class MigrantSupportComponent {
  supportCards = [
    {
      icon: 'fa-briefcase',
      title: 'Job Placement',
      description: 'Connecting workers with suitable employment opportunities that match their skills and aspirations.'
    },
    {
      icon: 'fa-tools',
      title: 'Skill Development',
      description: 'Training programs to enhance capabilities and prepare workers for rewarding careers.'
    },
    {
      icon: 'fa-language',
      title: 'Language Orientation',
      description: 'Basic language and communication training to help workers adapt to their new environment.'
    },
    {
      icon: 'fa-file-alt',
      title: 'Documentation',
      description: 'Assistance with necessary paperwork and permits to ensure legal and smooth transitions.'
    },
    {
      icon: 'fa-heartbeat',
      title: 'Health Check-ups',
      description: 'Regular health screenings and medical support to keep workers safe and healthy.'
    },
    {
      icon: 'fa-house-user',
      title: 'Safe Accommodation',
      description: 'Help finding safe and affordable housing so workers can feel secure and at home.'
    },
    {
      icon: 'fa-balance-scale',
      title: 'Legal Rights',
      description: 'Education about worker rights and protections to empower informed decision-making.'
    },
    {
      icon: 'fa-hands-helping',
      title: 'Welfare & Counselling',
      description: 'Emotional support and guidance to help workers navigate challenges with confidence.'
    }
  ];
}
