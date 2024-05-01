import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavService } from './nav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  load: boolean = false;
  constructor(public nav: NavService) {}

  ngOnInit(): void {
    this.load = true;
  }
}
