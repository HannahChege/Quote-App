import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {  };
import { AppComponent } from './app.component';
// import { QuoteComponent } from './quote/quote.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { QuoteComponent } from './quote1/quote1.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotedetailsComponent,
    QuoteComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
