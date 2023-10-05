import { Component, OnDestroy, OnInit } from '@angular/core';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';
import { INotes } from 'src/app/@application/interfaces/note.interface';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import { Router } from '@angular/router';
import { Utils } from 'src/app/@application/utils/utils';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { fadeInUp400ms } from 'src/app/@application/animations/fade-in-up.animation';

@Component({
  selector: 'app-note-list-page',
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.css'],
  animations: [fadeInUp400ms],
})
export class NoteListPageComponent implements OnInit, OnDestroy {
  public Editor = ClassicEditor;
  showTitle = false;
  title: string = '';
  editorContent: string = '';
  notes: INotes[] = [];
  isLoading: boolean = false;
  intervale: any;
  subscription!: Subscription;
  constructor(
    private store: Store<{ note: NoteState }>,
    private router: Router
  ) {}
  ngOnInit() {
    this.getNotes();
  }
  getNotes() {
    this.isLoading = true;
    this.intervale = setInterval(() => {
      this.isLoading = false;
      this.subscription = this.store
        .select('note', 'notes')
        .subscribe((notes) => {
          // this.isLoading = false;
          this.notes = notes;
        });
    }, 4000);
  }

  onFoucusEditor() {
    this.showTitle = true;
  }
  onClickAway() {
    this.showTitle = false;
    if (this.title !== '' || this.editorContent !== '') {
      this.store.dispatch(
        NoteActions.addNewNote({
          id: Utils.generateUniqId(),
          title: this.title,
          description: this.editorContent,
        })
      );
    }
    this.title = '';
    this.editorContent = '';
  }

  editorConfig = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
    ],
  };

  onEditorChange(event: any) {
    this.editorContent = event.editor.getData();
  }

  onDelete(noteId: any) {
    this.store.dispatch(NoteActions.deleteNote({ id: noteId }));
  }

  onNoteClick(noteID: any) {
    this.router.navigate([`/notes/details/${noteID}`]);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    // this.store.dispatch(NoteActions.dragNote({ previousIndex, currentIndex }));
  }
  ngOnDestroy(): void {
    //  this.subscription.unsubscribe();
    clearInterval(this.intervale);
  }
}
