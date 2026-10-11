import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: [`
    .auth-card {
      max-width: 450px;
    }
    .card-header {
      background-color: #1B3A5C;
      color: #fff;
    }
    .btn-gold {
      background-color: #E8A838;
      border-color: #E8A838;
      color: #fff;
      &:hover {
        background-color: darken(#E8A838, 8%);
        border-color: darken(#E8A838, 8%);
        color: #fff;
      }
    }
    a {
      color: #2E7D52;
      &:hover {
        color: darken(#2E7D52, 10%);
      }
    }
  `]
})
export default class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      role: ['Candidate']
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
