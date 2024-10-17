import { Injectable } from '@angular/core';
import { ProductModel } from './shared/my-products.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartItems : ProductModel[] = [];

  constructor() { }

  getProducts() {
    return this.cartItems;
  }

  onAddToCart(incomingProduct:ProductModel){
    const existingProduct = this.cartItems.find((product) => {
      return product.productName === incomingProduct.productName;
    })

    if(!existingProduct) {
      this.cartItems.push(incomingProduct);
    }else {
      existingProduct.qtty++
    }
    
  }

  getTotal() {
    let total = 0;
    this.cartItems.forEach(ele => {
      total += ele.qtty * ele.price;
    })
    return total;
  }

  // Method for calculating "Service" (10%)
  getServiceFee(): number {
    const total = this.getTotal();
    return total * 0.10;  // 10% of the total amount
  }

  getTotalWithServiceFee() {
    const total = this.getTotal(); 
    const totalSF = this.getServiceFee(); 
    return total + totalSF;
  }

  // The method for calculating the discount (15%) if the amount is more than 40 euros
  getDiscountedTotal(): number {
    const total = this.getTotalWithServiceFee();  // Total amount including service
    if (total > 40) {
      return total * 0.85;  // 15% discount
    }
    return total;  // If the amount is less than 40 euros, there is no discount
  }

}
