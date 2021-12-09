export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        // Edit/Update
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
    }

    static searchIt() {
        // get search bar element
        const searchInput = document.querySelector(".searchBar");
        // get the list of notes
        const notes = NotesAPI.getAllNotes();

        // listen for user events
        searchInput.addEventListener("keyup", (event) => {
            const { value } = event.target;
    
            // get user search input converted to lowercase
            const searchQuery = value.toLowerCase();
    
            for (const title of notes) {
                // store name text and convert to lowercase
                let noteTitle = title.textContent.toLowerCase();
        
                // compare current name to search input
                if (noteTitle.includes(searchQuery)) {
                    // found name matching search, display it
                    title.style.display = "block";
                }
                else {
                    // no match, don't display name
                    title.style.display = "none";
                }
            }
        });
    }
}