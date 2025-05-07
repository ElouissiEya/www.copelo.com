import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-product-grid',
  standalone: false,
  templateUrl: './sec-product-grid.component.html',
  styleUrl: './sec-product-grid.component.css'
})
export class SecProductGridComponent {
  products = [
    { name: 'Produit 1', price: 10, image: 'path/to/image1.jpg' },
    { name: 'Produit 2', price: 20, image: 'path/to/image2.jpg' },
    { name: 'Produit 3', price: 30, image: 'path/to/image3.jpg' }
  ];

  addToCart(product: any) {
    console.log(`Ajouté ${product.name} au panier`);
  }

}
