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
  
  constructor(private themeService:ThemeService) { }

  ngOnInit() {

  }
  onMenuToggle() {
    this.themeService.toggleMenu();
  }
 
  

}
