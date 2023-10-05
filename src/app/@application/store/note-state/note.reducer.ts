import { Action, createReducer, on } from '@ngrx/store';
import { NoteState } from './note.state';
import * as NoteActions from './note.actions';

const initialState: NoteState = {
  notes: [],
  deletedNotes: [],
  selectedNote: null,
  selectedNoteId: '',
  theme:"deeppurple-amber"
};
export const selectNoteState = (state:NoteState) => state.notes;

export const noteReducer = createReducer(
  initialState,
  on(NoteActions.addNewNote, (state, action) => ({
    ...state,
    notes: [...state.notes, action],
  })),

  on(NoteActions.updateNote, (state, action) => ({
    ...state,
    notes: state.notes.map((note) =>
      note.id === action.id ? { ...note, ...action.note } : note
    ),
  })),

  on(NoteActions.deleteNote, (state, action) => {
    const index = state.notes.findIndex((note) => note.id === action.id);
    const deletedNote = state.notes[index];
    return {
      ...state,
      notes: state.notes.filter((note) => note.id !== action.id),
      deletedNotes: [...state.deletedNotes, deletedNote],
    };
  }),

  on(NoteActions.getNoteById, (state, action) => {
    const note = state.notes.find((note) => note.id === action.id);
    return {
      ...state,
      selectedNote: note || null,
    };
  }),
  on(NoteActions.getDeletedNotes, (state) => ({
    ...state,
    deletedNotes: state.deletedNotes,
  })),

  on(NoteActions.emptyRecycleBin, (state) => ({
    ...state,
    deletedNotes: [],
  })),

  on(NoteActions.setNoteId, (state, { id }) => ({ ...state, id })),

  on(NoteActions.dragNote, (state, { previousIndex, currentIndex }) => {
    const notes = [...state.notes];
    const [draggedNote] = notes.splice(previousIndex, 1);
    notes.splice(currentIndex, 0, draggedNote);
    return { ...state, notes };
  }),
  on(NoteActions.updateTheme, (state, { theme }) => ({ ...state, theme }))
  
);

export function reducer(state:NoteState, action:Action) {
  return noteReducer(state, action);
}