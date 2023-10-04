import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeletedNotePageComponent } from './pages/deleted-note-page/deleted-note-page.component';
import { DeletedNotesRoutes } from './deleted-notes.routing';
import { MatGridListModule } from '@angular/material/grid-list';

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
    MatGridListModule

  ],
  declarations: [...COMPONETS]
})
export class DeletedNotesModule { }
