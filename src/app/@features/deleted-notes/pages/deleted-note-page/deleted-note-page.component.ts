import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INotes } from 'src/app/@application/interfaces/note.interface';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';

@Component({
  selector: 'app-deleted-note-page',
  templateUrl: './deleted-note-page.component.html',
  styleUrls: ['./deleted-note-page.component.css']
})
export class DeletedNotePageComponent implements OnInit {

  deletedNotes$: Observable<INotes[]>;

  constructor(private store: Store<{ note: NoteState }>) {
   this.deletedNotes$ =  this.store.select('note', 'deletedNotes');    
   }

  ngOnInit() {
  }
  onEmptyRecycleBin(){
    this.store.dispatch(NoteActions.emptyRecycleBin());
  }

}
