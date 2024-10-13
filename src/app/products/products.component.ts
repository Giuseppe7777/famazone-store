import { Component } from '@angular/core';
import { ELECTRONICS_PRODUCTS } from '../shared/my-products';
import { ProductModel } from '../shared/my-products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : ProductModel[] = ELECTRONICS_PRODUCTS;
}
