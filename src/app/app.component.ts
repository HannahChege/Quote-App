import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'', 'The Way Get Started Is To Quit Talking And Begin Doing.', 'Walt Disney', 0,  0 ,new Date()),
    new Quote(2,'', 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' , ' James Graham', 101, 23,new Date()),
    new Quote(3,'', 'We May Encounter Many Defeats But We Must Not Be Defeated.','Ali Caldwell',  54, 4,new Date()),
    new Quote(4,'', 'Love yourself. It is important to stay positive because beauty comes from the inside out.', 'Leah Jenea',  7, 2,new Date()),
    new Quote(5,'', 'Only God can Judge me', 'Chege Hannah',  42, 5,new Date()),
 ];  pushQuote($event){
    $event.id=this.quotes.length+1;
    $event.upVotes=0;
    $event.downVotes=0;
    this.quotes.unshift($event);
 
  }
  constructor() {
 
  }
}
