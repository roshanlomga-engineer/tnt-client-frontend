import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
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
export default class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
