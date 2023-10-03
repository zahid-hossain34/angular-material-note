import { Component,OnInit } from '@angular/core';
import { ThemeService } from './@theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-note';
  constructor(private themeService:ThemeService) { }
  ngOnInit(): void {
    this.themeService.setTheme("deeppurple-amber");

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
