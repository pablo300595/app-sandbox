import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })
  
  login() {
    console.log(`Login ${this.loginForm.get('email')?.value}, ${this.loginForm.get('password')?.value}`)
  }
}
