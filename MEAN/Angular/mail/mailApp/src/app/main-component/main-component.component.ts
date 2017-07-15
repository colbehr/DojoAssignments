import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
    constructor() { }
    emailList: any[] = [
        {email: "bill@gates.com", importance: true, subject: "This is a subject", content: "this is an email content"},
        {email: "melinda@gates.com", importance: false, subject: "This is another subject", content: "this is a content"},
        {email: "another@gates.com", importance: true, subject: "This subject", content: "this is an email content"},
    ]
  ngOnInit() {
  }

}
