import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { productList } from '../utils/product-list.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return productList;
  }
}
