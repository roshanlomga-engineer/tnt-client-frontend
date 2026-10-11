import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.default),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.default),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.default),
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./pages/how-it-works/how-it-works.component').then((m) => m.default),
  },
  {
    path: 'migrant-support',
    loadComponent: () =>
      import('./pages/migrant-support/migrant-support.component').then((m) => m.default),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.default),
  },
  {
    path: 'jobs',
    loadComponent: () =>
      import('./pages/jobs/job-list/job-list.component').then((m) => m.default),
  },
  {
    path: 'jobs/:id',
    loadComponent: () =>
      import('./pages/jobs/job-detail/job-detail.component').then((m) => m.default),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then((m) => m.default),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/register/register.component').then((m) => m.default),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
