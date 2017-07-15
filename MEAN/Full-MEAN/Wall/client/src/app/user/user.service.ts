import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"
@Injectable()
export class UserService {

  constructor(private http: Http ) {}

    login(fname: string){
        console.log("Logging in:", fname)
        return this.http.post("/loginUser", {userName: fname}).toPromise()
    }
    loggedIn(){
        return this.http.get("/currentUser")
            .map(data => data.json())
            .toPromise()

    }

}
