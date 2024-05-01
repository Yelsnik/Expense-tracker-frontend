import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'expense-tracker-frontend';
  nav: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((e) => {
      console.log(e[0].path);
    });
  }
}

/*
import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  prop: boolean = true;
  getData(e: any) {
    this.prop = e;
    console.log(this.prop);
  }
}

/*
<div>
  <div>
    <div>
      <div *ngIf="prop" class="px-10 text-white">
        <div class="flex justify-center text-center mt-6 font-bold">
          <p class="text-2xl text-rose-400">You've spent</p>
        </div>

        <div class="sm:flex grid justify-center sm:mt-10 sm:gap-10 lg:gap-20">
          <div
            class="sm:px-10 sm:py-10 sm:mt-0 mt-10 border-rose-700 h-52 w-52 bg-lime-600 rounded-full border-4"
          >
            <div>
              <div class="relative top-10 sm:top-5 text-center text-rose-200">
                <p class="text-6xl">86</p>
                <div class="mt-3"><p>so far this month</p></div>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <div class="grid gap-6">
              <div class="border border-lime-100 px-9 py-3 rounded">
                <p class="text-lime-500">15 today</p>
              </div>
              <div class="border px-9 py-3 rounded">
                <p class="text-lime-500">5 yesterday</p>
              </div>
              <div><p class="text-rose-400 text-lg font-bold">See more</p></div>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="prop" class="px-10 mt-8 text-white">
        <div class="border-t border-gray-900">
          <div class="lg:px-52">
            <div class="border-b-4 border-blue-300 py-3 px-2 bg-gray-950 mt-5">
              <p class="font-semibold text-xl">Groceries</p>
            </div>

            <div class="grid grid-cols-3 gap-5 mt-3">
              <p class="bg-gray-950 text-center py-2">past average</p>
              <p class="bg-gray-950 text-center py-2">this month</p>
              <p class="bg-gray-950 text-center py-2">spent extra</p>
            </div>

            <div
              class="grid grid-cols-3 gap-5 mt-3 border-b border-gray-900 pb-2"
            >
              <p class="text-center py-4 text-xl">15</p>
              <p class="bg-green-950 text-center py-4 text-xl">20</p>
              <p class="text-center py-4 text-xl">40</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!prop" class="px-10 text-white grid justify-center">
      <div class="grid gap-5 mt-10">
        <div><p class="w-full font-bold text-3xl text-center">Expenses</p></div>
        <div><p class="w-full font-bold text-3xl text-center">Reports</p></div>
        <div>
          <a
            routerLink="add-expense"
            class="w-full font-bold text-3xl text-center"
            >Add Expenses</a
          >
        </div>
        <div>
          <a class="w-full font-bold text-3xl text-center">My Profile</a>
        </div>
        <div><a class="w-full font-bold text-3xl text-center">Sign In</a></div>
      </div>
    </div>
  </div>
</div>
*/
