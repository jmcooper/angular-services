import { Component } from '@angular/core';
import { Product } from '@shared/product.model';
import { engineers } from './engineers';

@Component({
  selector: 'bot-catalog',
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: []
})
export class SquadCatalogComponent {
  squad: Product[] = engineers;
  private cart: Product[] = [];

  constructor() { }

  addToCart(engineer: Product) {
    this.cart.push(engineer);
  }
}
