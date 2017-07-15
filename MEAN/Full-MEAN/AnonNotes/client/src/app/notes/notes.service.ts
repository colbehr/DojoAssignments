import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs"

@Injectable()
export class NotesService {

  constructor(private http: Http) { }

  submitNote(note: String){
     console.log("Submitting", note)
     return this.http.post("/new", {note: note}).toPromise()
  }
  getNotes(){
      console.log("getting notes")
      return this.http.get("/getNotes")
        .map(data => data.json())
            .toPromise()
  }

}
