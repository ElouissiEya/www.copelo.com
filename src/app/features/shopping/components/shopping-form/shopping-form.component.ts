import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent {
  search = '';

  submitSearch() {
    console.log('Recherche :', this.search);
  }
}

