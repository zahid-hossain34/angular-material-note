import { Routes, RouterModule } from '@angular/router';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';
import { NoteDetailsPageComponent } from './pages/note-details-page/note-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: NoteListPageComponent,
  },
  {
    path: 'details/:id',
    component: NoteDetailsPageComponent,
  },
];

export const NotesListRoutes = RouterModule.forChild(routes);
