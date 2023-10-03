import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { 
    path: '',
    component: ProfilePageComponent,
   },
];

export const ProfileRoutes = RouterModule.forChild(routes);
