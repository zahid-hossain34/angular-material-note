import { Routes, RouterModule } from '@angular/router';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';

const routes: Routes = [
  { 
    path: '',
    component: NoteListPageComponent,
    
   },
];

export const NotesListRoutes = RouterModule.forChild(routes);
