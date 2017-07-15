import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"


import { NotesService } from "./notes.service"
import { Note } from "./note"


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note: String
  allNotes: any[]
  constructor(private notes_service: NotesService, private router: Router ) { }

  ngOnInit() {
      this.getNotes()
  }

  submitform() {
        console.log(this.note)
        this.notes_service.submitNote(this.note)
            .then(() => { this.router.navigate(["/"]) })
            .catch(() => console.log("Bad note"))
        this.note = ""
        this.getNotes()
  }

  getNotes(){
      console.log("Getting Notes >> service")
      this.notes_service.getNotes()
        .then((notes) => this.allNotes = notes)
        .catch(() => console.log("Bad refresh"))
  }
}
