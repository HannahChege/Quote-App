 import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
 import { Quote } from '../quote';
 
@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input() quotes: Quote;
  @Output() complete = new EventEmitter<boolean>(); 

  upVote(){
  this.quotes.upVotes ++
 }
 downVote(){
  this.quotes.downVotes ++ 
}

  deleteQuote(deleteIt: boolean) {
    this.complete.emit(deleteIt);
  }

  constructor() { }

  ngOnInit() {
  }

 }

