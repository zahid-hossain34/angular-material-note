import { Component, OnInit } from '@angular/core';
import { ThemeService } from './@theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-material-note';
  theme: string = '';
  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.updatedTheme.subscribe((res) => {
      this.theme = res;
    });
    this.themeService.setTheme(this.theme);
    

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
