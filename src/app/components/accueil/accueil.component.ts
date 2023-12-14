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
  numeroControl = new FormControl('1234567890');
  
  constructor(public dialog: MatDialog) {}

  verifierNumero() {
    if (this.numeroControl.value && this.numeroControl.value.length === 10) {
      this.afficherPopin(this.genererMessage());
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

  afficherPopin(message: string) {
    this.dialog.open(ParticipationModalComponent, {
      data: message
    });
  }

}
