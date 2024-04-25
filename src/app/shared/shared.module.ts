import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductDetailsComponent, CartComponent],
  exports: [ProductDetailsComponent, CartComponent, CommonModule]
})
export class SharedModule { }
