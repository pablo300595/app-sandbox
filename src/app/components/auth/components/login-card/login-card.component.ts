import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthDTO } from '../../models/auth.dto';

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
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10)
    ])
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  login() {
    const auth = this.loginForm.value
    const email = this.loginForm.get('email')?.value
    const password = this.loginForm.get('password')?.value

    if(!email || !password) {
      throw new Error('Missing inputs');
    }

    this.authService.login(auth).subscribe(
      {
        next: (authToken: AuthDTO) => {
          console.log(authToken)
          this.router.navigate(['home'])
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          console.log('Execution completed!')
        }
      }
    )
  }
}
