import { Component } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] = productsArray;
  private cart: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
