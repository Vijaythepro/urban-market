import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList!: Product[];
  filteredAndSortedProducts!:Product[];

  constructor(
    private productService: ProductService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
     this.productService.getProducts().subscribe({
      next: (data: Product[])=> {
        this.productList = data;
        this.filteredAndSortedProducts = [...this.productList];
      },
      error: (err)=>{
        console.log(err);
      }
    });
   
  }

  applyFilters(selectedFilters: string[]): void {
    this.filteredAndSortedProducts = this.filterService.filterItems(this.productList, selectedFilters);
  }
 
  updateSortedData(sortedData: Product[]) {
    this.filteredAndSortedProducts = sortedData;
  }

}
