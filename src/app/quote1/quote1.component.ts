import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  quotes = [
    new Quote('','','',0,0,new Date())
  ];

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  createNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  quoteComplete(Complete, index) {
    if (Complete) {
      this.quotes.splice(index, 1);
    }
  }

  Upvote(index) {
    this.quotes[index].upVotes += 1;
  }

  downvote(index) {
      this.quotes[index].downVotes += 1;
    }

  constructor() { }

  ngOnInit() {
  }

}
  


