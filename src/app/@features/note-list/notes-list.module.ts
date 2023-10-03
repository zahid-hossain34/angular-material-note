import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesListRoutes } from './notes-list.routing';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';
const COMPONETS = [
  // pages
  NoteListPageComponent,
  // components
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesListRoutes,
  ],
  declarations: [...COMPONETS]
})
export class NotesListModule { }
