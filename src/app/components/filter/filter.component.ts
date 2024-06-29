import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterOption } from '../../models/filter-option.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterChanged = new EventEmitter<string[]>();

  // TODO: The filter list option has to get from productlist mock file, for time being i'm using static data
  // Add more filters as needed 
  filters: FilterOption[] = [
    { name: 'beingHuman', displayName: 'Being Human' },
    { name: 'roadster', displayName: 'Roadster' },
    { name: 'wrogn', displayName: 'WROGN' },
    { name: 'highlander', displayName: 'HIGHLANDER' },
  ];

  selectedFilters: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange(event: any): void {
    const filterName = event.target.value;
    if (event.target.checked) {
      this.selectedFilters.push(filterName);
    } else {
      const index = this.selectedFilters.indexOf(filterName);
      if (index > -1) {
        this.selectedFilters.splice(index, 1);
      }
    }
    this.filterChanged.emit(this.selectedFilters);
  }

}
