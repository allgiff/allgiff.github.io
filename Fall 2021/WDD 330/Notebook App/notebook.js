function createNote() {
    
}

function getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notesApp-notes") || "[]");

    return notes.sort((a, b) => {
        return new Date(a.updated) > Date(b.updated) ? -1 : 1;
    });
}

function saveNote(noteToSave) {
    const notes = getAllNotes();

    noteToSave.id = Math.floor(Math.random() * 1000000);
    noteToSave.updated = new Date().toISOString();
    notes.push(noteToSave);

    localStorage.setItem("notesApp-notes", JSON.stringify(notes));
}

function deleteNote(id) {
    
}

