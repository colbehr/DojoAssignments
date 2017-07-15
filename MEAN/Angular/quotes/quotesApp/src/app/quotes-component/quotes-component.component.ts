import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Quote } from "./../quote";

@Component({
  selector: 'app-quotes-component',
  templateUrl: './quotes-component.component.html',
  styleUrls: ['./quotes-component.component.css']
})
export class QuotesComponentComponent implements OnInit {
    newQuote: Quote = new Quote()
  @Output() newQuoteEvent = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  makeNewQuote(){
      this.newQuoteEvent.emit(this.newQuote)
      this.newQuote = new Quote()
  }
}
