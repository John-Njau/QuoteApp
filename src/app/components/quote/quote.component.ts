import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { QuoteService } from 'src/app/quote-service/quote.service';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[];

  constructor(quoteService: QuoteService) {
    this.quotes = quoteService.getQuotes();
  }

  highest!: number;
  // arr: number[] = this.quotes.map(quote => quote.upvote)

  // highest = Math.max(...this.arr)

  addNewQuote(quote) {
    this.quotes.unshift(quote)
  }


  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  upVote(i) {
    var app = this.quotes[i].upvote + 1
    this.quotes[i].upvote = app
    let arr: number[] = this.quotes.map(quotes => quotes.upvote);
    this.highest = Math.max(...arr)
    console.log(this.quotes[i].upvote+1);

  }
  downVote(i) {
    this.quotes[i].downvote+1
    console.log(this.quotes[i].downvote+1);

  }

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
