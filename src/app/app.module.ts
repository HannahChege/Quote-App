import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './quotedetails/quotedetails.component';
import { Quote1Component } from './quote1/quote1.component';
import { QuoteComponent } from './quote/quote.component';
import { DateCountPipe } from './time-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    Quote1Component,
    QuoteComponent,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
