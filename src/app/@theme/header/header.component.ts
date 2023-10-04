import { Component, OnInit, ChangeDetectorRef ,AfterViewChecked} from '@angular/core';
import { Location } from '@angular/common';

import { ThemeService } from '../theme.service';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/@application/store/note-state/note.state';
import * as NoteActions from 'src/app/@application/store/note-state/note.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,AfterViewChecked {
  id: string = '';
  noteTitle = '';
  isIdAvailable: boolean = false;


  constructor(
    private themeService: ThemeService,
    private contexts: ChildrenOutletContexts,
    private locatin: Location,
    private store: Store<{ note: NoteState }>,
    private cdr: ChangeDetectorRef,
    private route:Router
  ) {}

  ngOnInit() {
    
  }
  getNoteId() {
    this.contexts.getContext('primary')?.route?.params.subscribe((res) => {
      this.id = String(res['id']);
    });
  }
  ngAfterViewChecked(): void {
    this.getNoteId();
    if(this.id !== '' && this.id !== undefined && this.id !== null){
    this.store.dispatch(NoteActions.getNoteById({ id: this.id }));
    this.store.select('note', 'selectedNote').subscribe((res) => {
      if (res) {
        this.noteTitle = res.noteTitle;
        this.isIdAvailable = res.id ? true : false;
      } else {
        this.isIdAvailable = false;
      }
    });

  }
    this.cdr.detectChanges();
  }
  onMenuToggle() {
    this.themeService.toggleMenu();
  }
  onBack() {
    this.locatin.back();
  }
  onDeleteNote(){
    this.store.dispatch(NoteActions.deleteNote({
      id:this.id
    }));
    this.route.navigate(['/notes']);

  }
}
