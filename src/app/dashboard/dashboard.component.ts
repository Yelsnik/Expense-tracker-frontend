import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, HomeComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  showNav: boolean = true;
}
