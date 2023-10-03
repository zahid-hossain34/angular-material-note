import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/app/@application/interfaces/theme-option.interface';

@Component({
  selector: 'app-theme-switch-button',
  templateUrl: './theme-switch-button.component.html',
  styleUrls: ['./theme-switch-button.component.css']
})
export class ThemeSwitchButtonComponent implements OnInit {
  @Input() options: Array<Option>| any;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(this.options);
    
  }
  changeTheme(themeToSet:string) {
    console.log(themeToSet)
    this.themeChange.emit(themeToSet);
  }

}
