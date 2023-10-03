import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutes } from './settings.routing';
import { FormsModule } from '@angular/forms';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
const COMPONENTS = [
  // pages
  SettingsPageComponent
]
@NgModule({
  imports: [
    CommonModule,
    SettingsRoutes,
    FormsModule

  ],
  declarations: [...COMPONENTS]
})
export class SettingsModule { }
