import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { UserService } from "./user.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string
  constructor( private user_service: UserService, private router: Router ) { }

  ngOnInit() {
  }

  loginUser() {
      this.user_service.login(this.userName).then(res => {
          console.log(res)
          this.router.navigate(["/wall"])
      }).catch(e => {
          console.log(e)
      })
  }

}
