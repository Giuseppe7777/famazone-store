import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ELECTRONICS_PRODUCTS } from '../shared/my-products';
import { ProductModel } from '../shared/my-products.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent {
  product:ProductModel;
  constructor
  (
    private route: ActivatedRoute,
    private cartService: CartService
  ) {   
    let id = parseInt(this.route.snapshot.params["id"]);   
    this.product = ELECTRONICS_PRODUCTS[id];  
  }

  addToCart() {
    this.cartService.onAddToCart(this.product);    
  }
}
