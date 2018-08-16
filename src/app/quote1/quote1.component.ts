import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  @Input() quotes= Array<Quote>();

  createNewQuote($event) {
    $event.id = this.quotes.length+1;
    $event.dateCreated =new Date();
     $event.upVote=0;
     $event.downVote=0;
    this.quotes.unshift($event);
  }
  quoteComplete(Complete, index) {
    if (Complete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
  


