import { Component } from '@angular/core';
import { Product } from '../product.model';
import { productsArray } from '../products-data'

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  products: Product[] = [...productsArray];
  searchTerm: string = '';
  cart: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [...productsArray];
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
