import { Component, OnInit } from '@angular/core';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor() { }

  ngOnInit(): void {
  }

  username = 'Kimani'

}
