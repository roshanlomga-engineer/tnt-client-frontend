import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styles: [`
    .footer {
      background-color: #1A1A2E;
      color: #ccc;
      padding: 4rem 0 0;
      font-size: 0.9rem;
    }

    .footer-heading {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
    }

    .footer-brand {
      font-size: 1.5rem;
      font-weight: 800;
      color: #E8A838;
      margin-bottom: 0.25rem;
    }

    .footer-tagline {
      color: #aaa;
      font-style: italic;
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;
      }

      a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: #E8A838;
        }
      }
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 0.75rem;

      i {
        color: #E8A838;
        margin-top: 3px;
        width: 16px;
        text-align: center;
      }
    }

    .social-icons {
      display: flex;
      gap: 0.75rem;
      margin-top: 1.5rem;

      a {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ccc;
        text-decoration: none;
        transition: background-color 0.2s ease, color 0.2s ease;

        &:hover {
          background-color: #E8A838;
          color: #fff;
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 3rem;
      padding: 1.25rem 0;
      text-align: center;
      color: #888;
      font-size: 0.85rem;
    }
  `]
})
export class FooterComponent {
  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' }
  ];

  services = [
    { label: 'Household', path: '/services/household' },
    { label: 'Business', path: '/services/business' },
    { label: 'Industrial', path: '/services/industrial' }
  ];
}
