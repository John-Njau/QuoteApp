import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  // public vote!: number;

  upVotes = 0;
  downVotes = 0;

  upVote() {
    this.upVotes = this.upVotes + 1;
    console.log(this.upVotes);
    
  }
  downVote() {
    this.downVotes = this.downVotes + 1;
    console.log(this.downVotes);
    
  }

  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;



  constructor() { }

  ngOnInit(): void {
  }

}
