import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      display: block;
    }

    .navbar {
      transition: box-shadow 0.3s ease;
      padding: 0.75rem 1rem;
    }

    .navbar.scrolled {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    .brand-logo {
      font-size: 1.75rem;
      font-weight: 800;
      color: #1B3A5C;
      letter-spacing: 1px;
    }

    .brand-tagline {
      font-size: 0.65rem;
      color: #6c757d;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
      margin-top: -4px;
    }

    .nav-link {
      color: #333 !important;
      font-weight: 500;
      font-size: 0.95rem;
      padding: 0.5rem 1rem !important;
      transition: color 0.2s ease;

      &:hover,
      &.active {
        color: #1B3A5C !important;
      }
    }

    .nav-link.active {
      font-weight: 600;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 1rem;
        right: 1rem;
        height: 2px;
        background-color: #E8A838;
        border-radius: 1px;
      }
    }

    .btn-cta {
      background-color: #E8A838;
      color: #fff;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      padding: 0.5rem 1.5rem;
      transition: background-color 0.2s ease, transform 0.1s ease;

      &:hover {
        background-color: #d4952e;
        color: #fff;
        transform: translateY(-1px);
      }
    }

    .navbar-toggler {
      border: none;
      padding: 0.25rem 0.5rem;

      &:focus {
        box-shadow: none;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuCollapsed = true;

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Migrant Support', path: '/migrant-support' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Contact', path: '/contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
