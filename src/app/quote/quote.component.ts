import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  newQuote= new Quote (0,'',"","",0,0,new Date());
    @Output() createQuote=new EventEmitter<Quote>();
    
    submitQuote(){
        this.createQuote.emit(this.newQuote);
        this.newQuote= new Quote (0,'',"","",0,0,new Date());
    }

  constructor() { }

  ngOnInit() { }

}



