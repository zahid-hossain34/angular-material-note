import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/app/@application/interfaces/theme-option.interface';
import { ThemeService } from '../theme.service';
import { Observable } from 'rxjs';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import { Store } from '@ngrx/store';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';

@Component({
  selector: 'app-theme-switch-button',
  templateUrl: './theme-switch-button.component.html',
  styleUrls: ['./theme-switch-button.component.css'],
})
export class ThemeSwitchButtonComponent implements OnInit {
  options$: Observable<Array<Option>> | any =
    this.themeService.getThemeOptions();

  constructor(
    private themeService: ThemeService,
    private store: Store<{ note: NoteState }>
  ) {}

  ngOnInit() {}
  changeTheme(themeToSet: string) {
    this.store.dispatch(NoteActions.updateTheme({ theme: themeToSet }));
    this.themeService.setTheme(themeToSet);
  }
}
