import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '@angular/compiler';
import { appendNgContent } from '@angular/core/src/view/ng_content';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Output() Quoted=new EventEmitter<Quote>();

  submitQuote(){
    this.Quoted.emit(this.newquote);
  }

  constructor() { }

  ngOnInit() {
  }

}


