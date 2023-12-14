import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-participation-modal',
  templateUrl: './participation-modal.component.html',
  styleUrl: './participation-modal.component.css'
})
export class ParticipationModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public message: string) { }
}
