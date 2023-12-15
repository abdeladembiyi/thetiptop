import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ParticipationModalComponent } from 'src/app/participation-modal/participation-modal.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css', './responsive.component.css' ]
  
})
export class AccueilComponent {
  isLoggedIn = false;
  numeroControl = new FormControl('');
  private numerosGagnants: string[] = ['1234567890', '1122334455', '2233445566'];
  private numerosDejaUtilises: string[] = ['9988776655', '8877665544', '0000000000'];
  
  constructor(public dialog: MatDialog) {}

  verifierNumero() {
    const numeroSaisi = this.numeroControl.value;
    if (!this.ngOnInit()) {
      this.afficherPopin('Attention', 'Vous devez vous connecter pour participer');
      return;
    }
    if (numeroSaisi && numeroSaisi.length === 10) {
      if (this.numerosDejaUtilises.includes(numeroSaisi)) {
        this.afficherPopin("Attention", "Ce code est déjà utilisé. Veuillez saisir un autre.");
      } else if (this.numerosGagnants.includes(numeroSaisi)) {
        this.afficherPopin("Félicitations", this.genererMessage());
      } else {
        this.afficherPopin("Attention", "Ce code est invalide.");
      }
    } else {
      alert("Veuillez entrer un numéro de 10 chiffres.");
    }
  }

  genererMessage(): string {
    const aleatoire = Math.random() * 100;
    if (aleatoire < 60) return "Félicitations, vous avez gagné un infuseur à thé!";
    if (aleatoire < 80) return "Félicitations, vous avez gagné une boite de 100g d’un thé détox ou d’infusion!";
    if (aleatoire < 90) return "Félicitations, vous avez gagné une boite de 100g d’un thé signature!";
    if (aleatoire < 96) return "Félicitations, vous avez gagné un coffret découverte d’une valeur de 39€!";
    return "Félicitations, vous avez gagné un coffret découverte d’une valeur de 69€!";
  }

  afficherPopin(title:string, message: string) {
    this.dialog.open(ParticipationModalComponent, {
      data: {title, message}
    });
  }

  ngOnInit(): boolean {
    return this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }  

}
