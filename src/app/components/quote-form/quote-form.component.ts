import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from "../../models/quote";
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  newQuote = new Quote("", "", "", 0, 0, new Date());

  // @Output() addQuote = new EventEmitter<Quote>();

  @Output() addQuote = new EventEmitter<Quote>();

  // submitting the created quote
  submitQuoteForm() {
    this.addQuote.emit(this.newQuote);
    // form clearing after submitting
  //  form.resetForm()

    console.log(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
