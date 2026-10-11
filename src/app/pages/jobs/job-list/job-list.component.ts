import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
}

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './job-list.component.html',
  styles: [`
    .hero-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2236 100%);
      color: #fff;
      padding: 3rem 0;
      text-align: center;
    }
    .hero-banner h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .hero-banner p {
      font-size: 1.1rem;
      opacity: 0.85;
    }
    .search-section {
      background: #f8f9fa;
      padding: 1.5rem 0;
      border-bottom: 1px solid #dee2e6;
    }
    .btn-primary-brand {
      background-color: #1B3A5C;
      border-color: #1B3A5C;
      color: #fff;
    }
    .btn-primary-brand:hover {
      background-color: #142d48;
      border-color: #142d48;
      color: #fff;
    }
    .btn-apply {
      background-color: #E8A838;
      border-color: #E8A838;
      color: #fff;
      font-weight: 600;
    }
    .btn-apply:hover {
      background-color: #d4952e;
      border-color: #d4952e;
      color: #fff;
    }
    .job-card {
      border: none;
      border-radius: 0.75rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .job-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    }
    .job-card .card-title {
      color: #1B3A5C;
      font-weight: 700;
      font-size: 1.25rem;
    }
    .badge-department {
      background-color: #1B3A5C;
      color: #fff;
    }
    .badge-fulltime {
      background-color: #2E7D52;
      color: #fff;
    }
    .badge-parttime {
      background-color: #E8A838;
      color: #fff;
    }
    .location-text {
      color: #555;
      font-size: 0.9rem;
    }
    .posted-date {
      color: #888;
      font-size: 0.85rem;
    }
    .jobs-section {
      padding: 2rem 0 3rem;
    }
  `]
})
export default class JobListComponent {
  searchKeyword = '';
  selectedLocation = '';

  locations = ['All Locations', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai'];

  allJobs: Job[] = [
    { id: 1, title: 'Live-in Maid', department: 'Household Services', location: 'Mumbai', type: 'Full-time', postedDate: '2024-01-15' },
    { id: 2, title: 'Office Housekeeper', department: 'Business Services', location: 'Delhi', type: 'Full-time', postedDate: '2024-01-14' },
    { id: 3, title: 'Security Guard', department: 'Security Services', location: 'Bangalore', type: 'Full-time', postedDate: '2024-01-13' },
    { id: 4, title: 'Cook', department: 'Household Services', location: 'Mumbai', type: 'Part-time', postedDate: '2024-01-12' },
    { id: 5, title: 'Driver', department: 'Transport Services', location: 'Pune', type: 'Full-time', postedDate: '2024-01-11' },
    { id: 6, title: 'Babysitter', department: 'Household Services', location: 'Chennai', type: 'Part-time', postedDate: '2024-01-10' },
  ];

  filteredJobs: Job[] = [...this.allJobs];

  onSearch(): void {
    this.filteredJobs = this.allJobs.filter(job => {
      const matchesKeyword = !this.searchKeyword ||
        job.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        job.department.toLowerCase().includes(this.searchKeyword.toLowerCase());
      const matchesLocation = !this.selectedLocation || this.selectedLocation === 'All Locations' ||
        job.location === this.selectedLocation;
      return matchesKeyword && matchesLocation;
    });
  }
}
