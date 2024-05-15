import { Component } from '@angular/core';
import { Login, LoginService } from './login.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // signInForm: FormGroup
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  login(data: Login) {
    this.loginService.signIn(data).subscribe({
      error: (err) => {
        console.error('Error with login:', err.message, err);
      },
      complete: () => {
        console.log('complete');
      },
      next: (res: any) => {
        console.log(res);
      },
    });
  }

  ngOnInit(): void {}
}
