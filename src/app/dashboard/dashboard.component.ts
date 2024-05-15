import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';
import { NavService } from '../nav/nav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, HomeComponent, RouterOutlet, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  navBar: boolean = true;

  constructor() {}

  getData(e: boolean) {
    this.navBar = e;
  }
}
