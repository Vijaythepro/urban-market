import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  
  title!: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Page not found';
  }

}
