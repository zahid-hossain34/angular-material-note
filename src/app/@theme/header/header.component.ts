import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { Location } from '@angular/common';

import { ThemeService } from '../theme.service';
import { ActivationEnd, ChildrenOutletContexts, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';
import { Subscription, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  id: string = '';
  noteTitle = '';
  isIdAvailable: boolean = false;
  private storeSubscription!: Subscription;

  constructor(
    private themeService: ThemeService,
    private contexts: ChildrenOutletContexts,
    private locatin: Location,
    private store: Store<{ note: NoteState }>,
    private cdr: ChangeDetectorRef,
    private route: Router
  ) {}

  ngOnInit() {
    // this.contexts.getContext('primary')?.route?.params.subscribe((res) => {
    //   this.id = String(res['id']);
    //   console.log(this.id)
    // });

    this.route.events
      .pipe(
        filter(
          (e) =>
            e instanceof ActivationEnd &&
            Object.keys(e.snapshot.params).length > 0
        ),
        map(
          (e) => (e instanceof ActivationEnd ? e.snapshot.params : {})
          // console.log(e instanceof ActivationEnd);
          // console.log(e instanceof ActivationEnd ? e.snapshot.params : {});
        )
      )
      .subscribe((params) => {
        this.id = params['id'];
        console.log(this.id);
        this.store.dispatch(NoteActions.getNoteById({ id: this.id }));
        this.storeSubscription = this.store
          .select('note', 'selectedNote')
          .subscribe((res) => {
            if (res) {
              this.noteTitle = res.noteTitle;
              this.isIdAvailable = true;
            }else{
              this.isIdAvailable = false;
    
            }
    
          });
 
      });
  }


  onMenuToggle() {
    this.themeService.toggleMenu();
  }
  onBack() {
    this.locatin.back();
  }
  onDeleteNote() {
    this.store.dispatch(
      NoteActions.deleteNote({
        id: this.id,
      })
    );
    this.route.navigate(['/notes']);
  }
  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
