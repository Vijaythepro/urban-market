import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList!: Product[];
  sortedList!:Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productList = this.productService.getProducts();
    this.sortedList = [...this.productList];
  }

 
  updateSortedData(sortedData: Product[]) {
    this.sortedList = sortedData;
  }

}
