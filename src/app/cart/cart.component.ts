import { Component } from '@angular/core';
import { ProductModel } from '../shared/my-products.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

// export class CartComponent {
//   productsFromCart : ProductModel[];
//   total : number;
//   constructor(private cartService : CartService) {
//     this.productsFromCart = cartService.getProducts();
//     this.total = cartService.getTotal();
//   }
// }

export class CartComponent {
  productsFromCart: ProductModel[];
  total: number;
  serviceFee: number;
  discountedTotal: number;
  priceWithServiceFee: number;

  constructor(private cartService: CartService) {
    this.productsFromCart = cartService.getProducts();
    this.total = cartService.getTotal();
    this.serviceFee = cartService.getServiceFee();
    this.priceWithServiceFee = cartService.getTotalWithServiceFee();
    this.discountedTotal = cartService.getDiscountedTotal();
  }
}
