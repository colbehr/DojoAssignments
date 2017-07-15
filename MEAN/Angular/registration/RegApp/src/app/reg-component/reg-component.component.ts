import { Component, OnInit } from '@angular/core';


import { User } from "./user"
@Component({
  selector: 'app-reg-component',
  templateUrl: './reg-component.component.html',
  styleUrls: ['./reg-component.component.css']
})
export class RegComponentComponent implements OnInit {
  user: User = new User()
  users: Array<User> = []
  constructor() { }

  ngOnInit() {
  }
  SubmitForm(){
  this.users.push(this.user);
  this.user = new User();
}

}
