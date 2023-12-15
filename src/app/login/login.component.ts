import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailControl  = new FormControl('test@test.com');
  passwordControl   = new FormControl('test123');
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.emailControl .value === 'test@test.com' && this.passwordControl  .value === 'test123') {
      this.router.navigate(['/accueil']);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      this.errorMessage = 'Invalid login or password';
    }
  }
}
