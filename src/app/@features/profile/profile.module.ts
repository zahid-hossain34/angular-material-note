import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutes } from './profile.routing';
import { FormsModule } from '@angular/forms';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
const COMPONENTS = [
  // pages
  ProfilePageComponent,
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutes,
  ],
  declarations: [...COMPONENTS]
})
export class ProfileModule { }
