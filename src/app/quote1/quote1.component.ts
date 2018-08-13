import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class QuoteComponent implements OnInit {
  quoted:any = [
    new Quote(1,'Watch Finding Nemo','play footabll',12,5, 'eefef',new Date(2018,3,14)),
    new Quote(2,'Buy Cookies', 'watch movies', 34,34,'kbkfj fj',new Date(2018,3,14)),
    // new Quote(3, 'Get new Phone Case','cook beans',23,45,'e fbkj ',new Date(2018,3,14)),
    // new Quote(4, 'Get Dog Food','go to the market',23,45,'shhbchb',new Date(2018,3,14)),
    

]


  toggleDetails(index) {
    this.quoted[index].showDescription = !this.quoted[index].showDescription;
  }
  addNewQuotes(quote) {
    const quoteLength = this.quoted.length;
    quote.id = quoteLength + 1;
    this.quoted.push(quote);
  }
  quoteComplete(isComplete, index) {
    if (isComplete) {
      this.quoted.splice(index, 1);
    }
  }

  upVote(index) {
    this.quoted[index].upvotes += 1;
  }

  downVote(index) {
      this.quoted[index].downvotes += 1;
    }

  constructor() { }

  ngOnInit() {
  }

}
  


