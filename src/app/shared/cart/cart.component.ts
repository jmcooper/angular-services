import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private cart: Product[] = [];

  constructor() { }

  ngOnInit() { }

  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  removeFromCart(product: Product) {
    this.cart.filter(p => p.id !== product.id);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
