import { Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ExpensesComponent } from './expenses/expenses.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'expenses', component: ExpensesComponent },
];
