import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeSwitchButtonComponent } from './theme-switch-button/theme-switch-button.component';

const COMPONENTS = [
  AppLayoutComponent,
  FooterComponent,
  HeaderComponent,
  ThemeSwitchButtonComponent,
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ThemeModule {}
