import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isLoggedIn = false; // Vous pouvez déterminer cela en vérifiant un service d'authentification ou un token stocké

  constructor(private router: Router) {}

  onSeConnecter() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/login']);
      this.deconnecter();
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }  

  deconnecter() {
    localStorage.removeItem('isLoggedIn');
  }
}
