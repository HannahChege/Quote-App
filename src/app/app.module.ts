import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { Quote1Component } from './quote1/quote1.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotedetailsComponent,
    Quote1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
