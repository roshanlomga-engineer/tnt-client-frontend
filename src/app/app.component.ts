import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'T&T Manpower Services';
}
