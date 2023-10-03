import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded:boolean = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  panelOpenState = false;
  constructor(private themeService:ThemeService) { }

  ngOnInit() {
    this.themeService.menuExpanded$.subscribe(expanded => {
      this.isExpanded = expanded;
    });
  }
  onItemToggle() {
    this.showSubmenu = !this.showSubmenu;
    // this.themeService.menuExpanded$.next( this.isExpanded);
  }

  

}
