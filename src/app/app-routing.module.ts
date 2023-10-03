import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './@theme/app-layout/app-layout.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      {
        path: 'notes',
        loadChildren: () =>
          import('./@features/note-list/notes-list.module').then(
            (m) => m.NotesListModule
          ),
      },
 
      {
        path: 'trash',
        loadChildren: () =>
          import('./@features/deleted-notes/deleted-notes.module').then((m) => m.DeletedNotesModule),

      },
 
      {
        path: 'profile',
        loadChildren: () =>
          import('./@features/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./@features/settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
