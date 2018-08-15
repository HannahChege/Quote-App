import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  tile='tile';
  @Input() quotes: Quote;
  @Output() complete = new EventEmitter<boolean>();


  upVotes() {
    this.quotes.upVotes++;
  }
downVotes() {
  this.quotes.downVotes++;
}
  deleteQuote(deleteIt: boolean) {
    this.complete.emit(deleteIt);
  }

  constructor() { }

  ngOnInit() {
  }

}

