import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from './@theme/theme.service';
import { Store } from '@ngrx/store';
import { NoteState } from './@application/store/note-state/note.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'angular-material-note';
  theme: string = '';
  themeSubscription!:Subscription
  constructor(
    private themeService: ThemeService,
    private store: Store<{ note: NoteState }>
  ) {}
  ngOnInit(): void {
    this.themeSubscription = this.store.select('note', 'theme').subscribe((theme) => {
      theme ? (this.theme = theme) : (this.theme = 'deeppurple-amber');
    });
    this.themeService.setTheme(this.theme);
  }
  ngOnDestroy(): void {
    if(this.themeSubscription) this.themeSubscription.unsubscribe();
  }
}
