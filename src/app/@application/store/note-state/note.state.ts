import { INotes } from "../../interfaces/note.interface"

export interface NoteState {
    notes: INotes[],
    deletedNotes: INotes[],
    selectedNote: INotes | null,
    selectedNoteId: string,
  }
 