import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/app/@application/interfaces/theme-option.interface';
import { ThemeService } from '../theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-switch-button',
  templateUrl: './theme-switch-button.component.html',
  styleUrls: ['./theme-switch-button.component.css']
})
export class ThemeSwitchButtonComponent implements OnInit {
  options$: Observable<Array<Option>> | any = this.themeService.getThemeOptions();

  constructor(private themeService:ThemeService ) { }

  ngOnInit() {
    
  }
  changeTheme(themeToSet:string) {
    this.themeService.setTheme(themeToSet);
  }

}
