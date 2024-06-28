import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  animatedText = '';
  fullText = 'Elevate Your Style with Chic Trends Effortlessly!!';
  contentIndex = 0;
  widgetData = [
    {
      prefix: "~",
      suffix: "bn+",
      count: "3",
      title:  "orders"
    },
    {
      prefix: "",
      suffix: "k+",
      count: "200",
      title:  "brand Partners"
    },
    {
      prefix: "",
      suffix: "k+",
      count: "200",
      title: "outlets"
    },
    {
      prefix: "",
      suffix: "+",
      count: "650",
      title: "cities in India"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.typeLetter();
  }

  typeLetter() {
    if (this.contentIndex < this.fullText.length) {
      this.animatedText += this.fullText.charAt(this.contentIndex);
      this.contentIndex++;
      setTimeout(() => this.typeLetter(), 70); // Adjust the speed here (in milliseconds)
    }
  }

}
