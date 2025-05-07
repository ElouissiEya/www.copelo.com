import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingFormComponent } from '../../components/shopping-form/shopping-form.component';

@Component({
  selector: 'app-shopping-page',
  standalone: true,
  imports: [CommonModule, ShoppingFormComponent],
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent {
  // Données à afficher sur la page principale
}

