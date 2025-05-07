import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-cart',
  standalone: false,
  templateUrl: './sec-cart.component.html',
  styleUrl: './sec-cart.component.css'
})
export class SecCartComponent {
  cartItems = [
    { name: 'Produit 1', quantity: 2, price: 10 },
    { name: 'Produit 2', quantity: 1, price: 20 }
  ];
  
  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  removeItem(item: { name: string; quantity: number; price: number }) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }
  
// Fonction pour passer à la caisse
checkout() {
  if (this.cartItems.length === 0) {
    alert('Votre panier est vide!');
  } else {
    // Logique pour passer à la caisse, par exemple, redirection ou formulaire de paiement
    console.log('Passer à la caisse avec les articles:', this.cartItems);
  }}
}
