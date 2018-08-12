import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuotedetailsComponent } from '../quotedetails/quotedetails.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Output() Quoted=new EventEmitter<Quote>();


  constructor() { }

  ngOnInit() {
  }

}


