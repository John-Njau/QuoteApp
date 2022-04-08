import { Component, OnInit } from '@angular/core';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor() { }

  ngOnInit(): void {
  }

  username = 'Kimani'
}
