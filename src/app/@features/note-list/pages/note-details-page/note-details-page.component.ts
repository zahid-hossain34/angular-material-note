import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';

@Component({
  selector: 'app-note-details-page',
  templateUrl: './note-details-page.component.html',
  styleUrls: ['./note-details-page.component.css'],
})
export class NoteDetailsPageComponent implements OnInit {
  public Editor = ClassicEditor;
  id: string = '';
  editorContent = '';
  title: string = '';

  constructor(
    private store: Store<{ note: NoteState }>,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((res) => {
      
      this.id = String(res.get('id'));
    });
    this.getNoteByIdAction();
    this.selectedNoteDetaisl();
  }
  getNoteByIdAction() {
    this.store.dispatch(NoteActions.getNoteById({ id: this.id }));
  }
  selectedNoteDetaisl() {
    this.store.select('note', 'selectedNote').subscribe((res) => {
      if (res) {
        this.id = res.id as string;
        this.title = res.noteTitle;
        this.editorContent = res.noteDescription;
      }
    });
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
    this.store.dispatch(
      NoteActions.updateNote({
        id: this.id,
        note: {
          noteTitle: this.title,
          noteDescription: this.editorContent,
        },
      })
    );
  }
  onTitleChange(updateTitle: string) {
    this.title = updateTitle;
    this.store.dispatch(
      NoteActions.updateNote({
        id: this.id,
        note: {
          noteTitle: this.title,
          noteDescription: this.editorContent,
        },
      })
    );
  }
  onDeleteNote() {
    this.store.dispatch(
      NoteActions.deleteNote({
        id: this.id,
      })
    );
    this.route.navigate(['/notes']);
  }
}
