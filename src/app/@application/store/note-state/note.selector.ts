import { createSelector } from '@ngrx/store';
import { selectNoteState } from './note.reducer';

export const selectNotes = createSelector(
  selectNoteState,
  (state) => {
    return state;
}
);

export const selectDeletedNotes = createSelector(
  selectNoteState,
  (state) => state
);

export const selectSelectedNote = createSelector(
  selectNoteState,
  (state) => state
);

export const selectSelectedNoteId = createSelector(
  selectNoteState,
  (state) => state
);
