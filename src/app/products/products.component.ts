// import { Component } from '@angular/core';
// import { ELECTRONICS_PRODUCTS } from '../shared/my-products';
// import { ProductModel } from '../shared/my-products.model';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.css'
// })
// export class ProductsComponent {
//   isAddedToCart: boolean[] = [];

//   products : ProductModel[] = ELECTRONICS_PRODUCTS;

//   constructor(private cartService: CartService) {}

//   addToCart(product: ProductModel, index: number) {
//     this.cartService.onAddToCart(product);

//     this.isAddedToCart[index] = true;

//     setTimeout(() => {
//       this.isAddedToCart[index] = false;
//     }, 500);
//   }
// }

import { Component, HostListener } from '@angular/core';
import { ELECTRONICS_PRODUCTS } from '../shared/my-products';
import { ProductModel } from '../shared/my-products.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: ProductModel[] = ELECTRONICS_PRODUCTS;
  isAddedToCart: boolean[] = [];
  
  isMediumScreen: boolean = false; // Control of button block display

  constructor(private cartService: CartService) {
    this.checkScreenSize(); // Checking the screen size on load
  }

  // Triggered on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(); // Checking the screen size on resize
  }

  // Screen size check
  checkScreenSize() {
    this.isMediumScreen = window.innerWidth <= 992; 
  }

  addToCart(product: ProductModel, index: number) {
    this.cartService.onAddToCart(product);
    this.isAddedToCart[index] = true;
    setTimeout(() => {
      this.isAddedToCart[index] = false;
    }, 500);
  }
}
