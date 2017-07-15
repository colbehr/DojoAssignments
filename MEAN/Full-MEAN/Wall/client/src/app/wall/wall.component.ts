import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { UserService } from "../user/user.service"
import { WallService } from "../wall/wall.service"

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  userName: any
  userid: any
  messages: any
  constructor(private user_service: UserService,private wall_service: WallService, private router: Router) { }

    ngOnInit() {
      this.checkLogin()
      this.messages = this.wall_service.showMessages()
      console.log(this.messages)
    }

    checkLogin(){
        this.user_service.loggedIn().then(res => {
          console.log("RES",res)
          if(res.userName){
            console.log("User Logged In")
            this.userName = res.userName
            this.userid = res.id
            console.log(this.userName, this.userid)
          } else{
            console.log("User Not Logged In")
              this.router.navigate(["/"])
          }
        }).catch(e => {
            console.log(e)
        })
    }
}
