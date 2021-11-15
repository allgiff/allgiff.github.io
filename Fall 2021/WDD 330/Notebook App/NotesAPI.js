export default class NotesAPI {

static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesApp-notes") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = getAllNotes();

        noteToSave.id = Math.floor(Math.random() * 1000000);
        noteToSave.updated = new Date().toISOString();
        notes.push(noteToSave);

        localStorage.setItem("notesApp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
    
    }
}
