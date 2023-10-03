import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesListRoutes } from '../note-list/notes-list.routing';
import { DeletedNotePageComponent } from './pages/deleted-note-page/deleted-note-page.component';
import { DeletedNotesRoutes } from './deleted-notes.routing';
const COMPONETS = [
  // pages
  DeletedNotePageComponent,
  // components
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DeletedNotesRoutes,

  ],
  declarations: [...COMPONETS]
})
export class DeletedNotesModule { }
