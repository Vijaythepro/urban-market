import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Input() data: Product[] = [];
  @Output() sortedData = new EventEmitter<any[]>();
  options: { value: string, label: string }[] = [
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'rating', label: 'Customer Rating' },
    { value: 'discount', label: 'Better Discount' }
  ];
  selectedSort: string = 'price-desc'; // Default sort option

  constructor() { }

  ngOnInit(): void {
    const sortedArray = this.sortData(this.selectedSort);
    this.sortedData.emit(sortedArray);
  }

  onSortChange(event: Event): void {
    this.selectedSort = (event.target as HTMLSelectElement).value;
    const sortedArray = this.sortData(this.selectedSort);
    this.sortedData.emit(sortedArray);
  }

  sortData(criteria: string): any[] {
    const sorted = [...this.data];
    switch (criteria) {
      case 'price-desc':
        sorted.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      case 'price-asc':
        sorted.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case 'rating':
        sorted.sort((a, b) => b.userRating - a.userRating);
        break;
      case 'discount':
        sorted.sort((a, b) => b.percentage - a.percentage);
        break;
      default:
        break;
    }
    return sorted;
  }

}
