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
  // notes:INotes[] = [];
  timePeriods:any=[]
  notes$: Observable<INotes[]>;


  constructor(
    private store: Store<{ note: NoteState }>,
    private router: Router
  ) {
    this.notes$ = this.store.select('note', 'notes');
    
  }
  // ngOnInit() {
  //   console.log("data");
    
   
  //    this.store.select('note', 'notes').subscribe((data) => {
  //     console.log(data);
  //     this.notes = data;

  //     // setTimeout(() => {
  //     //   this.timePeriods = [
  //     //     {
  //     //       noteTitle: "Bronze age",
  //     //       noteDescription: "The Bronze Age is a historical period that was characterized by the use of bronze, in some areas proto-writing, and other early features of urban civilization. The Bronze Age is the second principal period of the three-age Stone-Bronze-Iron system, as proposed in modern times by Christian Jürgensen Thomsen, for classifying and studying ancient societies.",
  //     //     },
  //     //     {
  //     //       noteTitle: "Bronze age",
  //     //       noteDescription: "The Bronze Age is a historical period that was characterized by the use of bronze, in some areas proto-writing, and other early features of urban civilization. The Bronze Age is the second principal period of the three-age Stone-Bronze-Iron system, as proposed in modern times by Christian Jürgensen Thomsen, for classifying and studying ancient societies.",
  //     //     }
          
  //     //   ];
  //     // },1000)
  //   }
  //   );
  // }

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
    this.store.dispatch(NoteActions.dragNote({ previousIndex, currentIndex }));
    // moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}


// {"note":{"notes":[{"id":"c2b22815d6d19","noteTitle":"","noteDescription":"<p>avv</p>","type":"[Note] Add New Data"},{"id":"b0b111ece9b65","noteTitle":"acvvvvvvvv","noteDescription":"<p>aaaaaaaaaaa</p>","type":"[Note] Add New Data"},{"id":"c554c9521d2e8","noteTitle":"test titkee","noteDescription":"<p>aaaaaaa</p>","type":"[Note] Add New Data"},{"id":"c0cb4283e42f3","noteTitle":"","noteDescription":"<p>aaaa</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>&nbsp;</p><p>a</p>","type":"[Note] Add New Data"},{"id":"88fa39d7d2988","noteTitle":"aaaaaaaa","noteDescription":"","type":"[Note] Add New Data"}],"deletedNotes":[{"id":"4dcb7648801ae","noteTitle":"","noteDescription":"<p>aaaa</p>","type":"[Note] Add New Data"}],"selectedNote":null,"selectedNoteId":""}}