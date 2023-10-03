import { Routes, RouterModule } from '@angular/router';
import { DeletedNotePageComponent } from './pages/deleted-note-page/deleted-note-page.component';

const routes: Routes = [
  { 
    path: '',
    component: DeletedNotePageComponent,
    
   },
];

export const DeletedNotesRoutes = RouterModule.forChild(routes);
