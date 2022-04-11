import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from 'src/app/models/quote'
import { VoteComponent } from '../vote/vote.component';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  uploadedDate(){
   const date = new Date();
   return date.getTime
  }

  constructor() { }

  ngOnInit(): void {
  }

}
