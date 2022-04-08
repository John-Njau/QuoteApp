import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  faEllipsisV = faEllipsisV;

  quotes: Quote[] =[
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo'),
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo'),
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  username = 'Kimani'

  showDetails(i){
    this.quotes[i].showDetails = !this.quotes[i].showDetails;
  }

  addNewQuote(quote){
    this.quotes.push(quote)
    
  }
}
