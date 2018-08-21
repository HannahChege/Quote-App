import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  @Input() quotes=[
    new Quote(1,'Maya Angelou','The meaning of life is to find your gift','Maya',7,6,new Date,),
    new Quote(2,'William Blake','If a thing loves it is infinite','Blake',7,6,new Date,),
    new Quote(3,'You cant','haveadream','',7,6,new Date,),
  ] 

  createNewQuote($event) {
    $event.id = this.quotes.length+1;
    $event.dateCreated =new Date();
     $event.upVote=0;
     $event.downVote=0;
    this.quotes.unshift($event);
  }
  quoteDelete(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
  


