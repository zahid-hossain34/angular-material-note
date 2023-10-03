import { Routes, RouterModule } from '@angular/router';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [
  { 
    path: '',
    component: SettingsPageComponent,
  },
];

export const SettingsRoutes = RouterModule.forChild(routes);
