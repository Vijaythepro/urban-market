import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterItems(items: Product[], selectedFilters: string[]): any[] {
    if (selectedFilters.length === 0) {
      return items;
    }

    return items.filter(item => selectedFilters.includes(item.id));
  }
}
