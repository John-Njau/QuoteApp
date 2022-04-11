import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Kimani Warugongo', 'For he Lives Today', 'Njomo'),
    new Quote('Schumer Schumaka', 'Whatever is Good, Whatever is noble', 'Harry Oluche'),
    new Quote('Kimani Warugongo', 'For he Lives Today', 'Njomo')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(i) {
    this.quotes[i].showDetails = !this.quotes[i].showDetails;
  }

  addNewQuote(quote) {
    this.quotes.unshift(quote)
    
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
}
