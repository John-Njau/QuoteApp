import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-sidebutton',
  templateUrl: './sidebutton.component.html',
  styleUrls: ['./sidebutton.component.css']
})
export class SidebuttonComponent implements OnInit {


  @Input() quote!: Quote;

  faEllipsisV = faEllipsisV

  constructor() { }

  ngOnInit(): void {
  }

}
