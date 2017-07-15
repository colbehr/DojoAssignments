import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"
@Injectable()
export class WallService {

  constructor(private http: Http ) {}

    showMessages(){
        return this.http.get("/getAll")
          .map(data => data.json())
          .toPromise()
    }
}
