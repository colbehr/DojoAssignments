import { Component } from '@angular/core';
import {Quote } from "./quote"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotesList: any[] =  [{id:0, quoteText:"Don't cry because it's over, smile because it happened.",author:"Dr. Seuss", votes: 4},
  {id:1, quoteText:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",author:"Marilyn Monroe", votes: 12}]

  dataFromChild(eventData){
      eventData.votes = 0
      eventData.id = this.quotesList.length
      this.quotesList.push(eventData)
  }
}
