import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { INotes } from 'src/app/@application/interfaces/note.interface';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';
import { fadeInUp400ms } from 'src/app/@application/animations/fade-in-up.animation';

@Component({
  selector: 'app-deleted-note-page',
  templateUrl: './deleted-note-page.component.html',
  styleUrls: ['./deleted-note-page.component.css'],
  animations: [fadeInUp400ms],
})
export class DeletedNotePageComponent implements OnInit, OnDestroy {
  deletedNotes$: Observable<INotes[]>;
  constructor(private store: Store<{ note: NoteState }>) {
    this.deletedNotes$ = this.store.select('note', 'deletedNotes');
  }

  ngOnInit() {}
  onEmptyRecycleBin() {
    this.store.dispatch(NoteActions.emptyRecycleBin());
  }
  ngOnDestroy(): void {
    // if (this.deletedNotes$) {
    //   this.deletedNotes$.subscribe().unsubscribe()
    // }
  }
}
