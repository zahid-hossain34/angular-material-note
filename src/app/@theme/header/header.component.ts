import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { ThemeService } from '../theme.service';
import { Option } from 'src/app/@application/interfaces/theme-option.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedTheme = 'theme-default';
  options$: Observable<Array<Option>> | any = this.themeService.getThemeOptions();
  constructor(private themeService:ThemeService) { }

  ngOnInit() {
    this.themeService.setTheme("indigo-pink");
    console.log(this.options$);
    
  }
  onMenuToggle() {
    this.themeService.toggleMenu();
  }
 
  themeChangeHandler(themeToSet:string) {
    this.themeService.setTheme(themeToSet);
  }
  

}
