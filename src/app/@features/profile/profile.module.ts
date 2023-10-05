import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutes } from './profile.routing';
import { FormsModule } from '@angular/forms';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from 'src/app/@shared/shared.module';
const COMPONENTS = [
  // pages
  ProfilePageComponent,
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutes,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  declarations: [...COMPONENTS]
})
export class ProfileModule { }
