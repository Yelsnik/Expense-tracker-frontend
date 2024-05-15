import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() eventEmit = new EventEmitter<boolean>();
  navBar: boolean = true;

  nav() {
    this.navBar = !this.navBar;

    this.eventEmit.emit(this.navBar);
  }

  ngOnInit(): void {}
}
