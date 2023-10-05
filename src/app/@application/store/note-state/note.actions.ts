import { createAction, props } from '@ngrx/store';
import { INotes, IUpdateNote } from '../../interfaces/note.interface';

export const addNewNote = createAction(
  '[Note] Add New Data',
  props<INotes>()
);

export const updateNote = createAction(
  '[Note] Update Note',
  props<{id:string,note:Partial<IUpdateNote>}>()
);

export const deleteNote = createAction(
  '[Note] Delete Item',
  props<{ id: string }>()
);

export const getNoteById = createAction(
  '[Note] Get Note By Id',
  props<{id:string}>()
);
export const setNoteId = createAction(
  '[Note] Set ID',
  props<{ id: string }>()
);
export const setNote = createAction(
  '[Note] Set Note',
  props<{ note: INotes }>()
);
export const getDeletedNotes = createAction(
  '[Note] Get Deleted Notes'
);
export const dragNote = createAction(
  '[Note] Drag Note',
  props<{ previousIndex: number, currentIndex: number }>()
);
export const updateTheme = createAction(
  '[Note] Update Theme',
  props<{ theme: string }>()
);

export const emptyRecycleBin = createAction('[Note] Empty Bin');



