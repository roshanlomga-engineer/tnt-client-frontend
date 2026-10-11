import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: [`
    .hero-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0d1f33 100%);
      padding: 80px 0 60px;
      color: #fff;
      text-align: center;
    }
    .hero-banner h1 {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .hero-banner p {
      font-size: 1.15rem;
      opacity: 0.85;
    }
    .contact-section {
      padding: 60px 0;
      background: #f8f9fa;
    }
    .contact-form-card {
      background: #fff;
      border-radius: 12px;
      padding: 35px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .contact-form-card h3 {
      color: #1B3A5C;
      font-weight: 700;
      margin-bottom: 25px;
    }
    .form-label {
      font-weight: 600;
      color: #1B3A5C;
    }
    .form-control:focus, .form-select:focus {
      border-color: #E8A838;
      box-shadow: 0 0 0 0.2rem rgba(232,168,56,0.25);
    }
    .btn-submit {
      background-color: #E8A838;
      color: #fff;
      border: none;
      padding: 12px 40px;
      font-size: 1.05rem;
      font-weight: 600;
      border-radius: 6px;
      transition: background-color 0.3s;
    }
    .btn-submit:hover {
      background-color: #d4952e;
      color: #fff;
    }
    .invalid-feedback {
      display: block;
    }
    .info-card {
      background: #fff;
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 20px;
      display: flex;
      align-items: flex-start;
      gap: 15px;
    }
    .info-card .icon-circle {
      width: 50px;
      height: 50px;
      min-width: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1B3A5C, #2E7D52);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.2rem;
    }
    .info-card h5 {
      color: #1B3A5C;
      font-weight: 700;
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .info-card p {
      margin: 0;
      color: #555;
    }
    .info-card a {
      color: #2E7D52;
      text-decoration: none;
      font-weight: 500;
    }
    .info-card a:hover {
      text-decoration: underline;
    }
    .bottom-section {
      background: #1B3A5C;
      color: #fff;
      text-align: center;
      padding: 40px 0;
    }
    .bottom-section h4 {
      font-weight: 700;
      margin-bottom: 8px;
    }
    .bottom-section p {
      color: #E8A838;
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0;
    }
  `]
})
export default class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  serviceTypes: string[] = [
    'Household Staffing',
    'Business Staffing',
    'Industrial Manpower',
    'Caregivers',
    'Drivers',
    'Security',
    'Housekeeping',
    'Migrant Worker Support'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      serviceType: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
