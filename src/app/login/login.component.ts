import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailControl  = new FormControl('');
  passwordControl   = new FormControl('');
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin(): void {
    console.log(this.emailControl.value);
    console.log(this.passwordControl.value);
    console.log(this.passwordControl .value === 'admin');
    console.log(this.emailControl.value === 'admin@admin.com');
    if (this.emailControl.value == 'admin@admin.com' && this.passwordControl.value == 'admin') {
      this.router.navigate(['/accueil']);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      this.errorMessage = 'Invalid login or password';
    }
  }
}
