import { Component, OnInit, Input } from '@angular/core';

import { Quote } from "./../quote"

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
 @Input() quotesList;

  constructor() {
  }

  ngOnInit() {
  }

  vote(id: number, voteby:number){
      this.quotesList[id].votes += voteby
  }

  delete(id: number){
      this.quotesList.splice(id, 1);
      for(var i = 0; i < this.quotesList.length; i++){
          this.quotesList[i].id = i
      }
  }
}
