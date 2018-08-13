import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class quoteComponent implements OnInit {
newQuote = new Quote("","", new Date());
@Output() addQuote = new EventEmitter<Quote>();

submitQuotes() {
  this.addQuote.emit(this.newQuote);
}
  constructor() { }

  ngOnInit() {
  }
}



