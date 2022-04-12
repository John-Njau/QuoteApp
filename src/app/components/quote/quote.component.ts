import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Kimani Warugongo', 'For he Lives Today', 'Njomo', 10, 0, new Date()),
    new Quote('Schumer Schumaka', 'Whatever is Good, Whatever is noble', 'Harry Oluche', 0, 0, new Date()),
    new Quote('Kimani Warugongo', 'For he Lives Today', 'Njomo', 0, 0, new Date()),
    new Quote('Schumer Schumaka', 'Whatever is Good, Whatever is noble', 'Harry Oluche', 0, 0, new Date()),
  ]

  arr: number[] = this.quotes.map(quotes => quotes.upvote)

  highest = Math.max(...this.arr)

  addNewQuote(quote) {
    this.quotes.unshift(quote)
  }


  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  upVote(i) {
    this.quotes[i].upvote ++
    console.log(this.quotes[i].upvote++);

  }
  downVote(i) {
    this.quotes[i].downvote ++
    console.log(this.quotes[i].downvote++);

  }
  constructor() { }

  ngOnInit(): void {
  }

  showDetails(i) {
    this.quotes[i].showDetails = !this.quotes[i].showDetails;
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
