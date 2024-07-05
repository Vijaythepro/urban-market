import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { productList } from '../utils/product-list.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():Observable<Product[]> {
    return of(productList);
  }
}
