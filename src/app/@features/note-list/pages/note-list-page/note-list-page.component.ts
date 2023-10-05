import { Component, OnInit } from '@angular/core';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';
import { INotes } from 'src/app/@application/interfaces/note.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import { Router } from '@angular/router';
import { Utils } from 'src/app/@application/utils/utils';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-note-list-page',
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.css'],
})
export class NoteListPageComponent {
  public Editor = ClassicEditor;
  showTitle = false;
  title: string = '';
  editorContent: string = '';
  // notes$: Observable<INotes[]>;


  constructor(
    private store: Store<{ note: NoteState }>,
    private router: Router
  ) {
    // this.notes$ = this.store.select('note', 'notes');
    
  }
  ngOnInit() {

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
          noteTitle: this.title,
          noteDescription: this.editorContent,
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
}

