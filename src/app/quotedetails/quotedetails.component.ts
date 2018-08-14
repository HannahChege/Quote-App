import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() Quote: Quote;
  @Output() complete = new EventEmitter<boolean>();

  upVote() {
    this.Quote.upVotes
  }
downvote() {
  this.Quote.downVotes
}
  deleteQuote(deleteIt: boolean) {
    this.complete.emit(deleteIt);
  }

  constructor() { }

  ngOnInit() {
  }

}

