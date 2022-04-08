import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  quotes: Quote[] =[
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo'),
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo'),
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo'),
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo'),
    new Quote('Kimani Warugongo','For he Lives Today', 'Njomo')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
