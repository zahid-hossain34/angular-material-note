import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesListRoutes } from './notes-list.routing';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';
import { ClickAwayListenerDirective } from 'src/app/@application/directives/click-away-listener.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {DragDropModule,CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { NoteDetailsPageComponent } from './pages/note-details-page/note-details-page.component';

const COMPONETS = [
  // pages
  NoteListPageComponent,
  NoteDetailsPageComponent
  // components
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesListRoutes,
    CKEditorModule,
    MatInputModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  declarations: [...COMPONETS,ClickAwayListenerDirective]
})
export class NotesListModule { }
