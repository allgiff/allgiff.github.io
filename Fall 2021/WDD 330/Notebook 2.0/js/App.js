import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";
    
export default class App {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());

        this._refreshNotes();
        this._searchIt();
    }

    _refreshNotes() {
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if (notes.length > 0) {
            this._setActiveNote(notes[0]);
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisibility(notes.length > 0);
    }

    //note the user is working
    _setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note);
    }

    _searchIt() {
        // get search bar element
        const searchInput = document.querySelector(".searchBar");

        searchInput.addEventListener("keyup", function(event) {
            const { value } = event.target;
            // get user search input converted to lowercase
            const searchQuery = value.toLowerCase();
                    // get the list of notes
            let notes = JSON.parse(localStorage.getItem('notesapp-notes'));
            
            //get the notes
            let theTitle = document.getElementsByTagName("li");
            console.log(theTitle);
            let theNote = document.querySelector(".notes__list-item");
            
            for(const { title } of notes) {
                    // store title text and convert to lowercase
                    let noteTitle = title.toLowerCase();
                    console.log(noteTitle);
                    //currently only removes the first item in the note list
        
                    // compare current name to search input
                    if (noteTitle.includes(searchQuery)) {
                        // found name matching search, display it
                        theNote.style.display = "block";
                        
                    }
                    else {
                        // no match, don't display name
                        theNote.style.display = "none";
                    }
                }
            
        });
    }

    //update note changes, like edits and deletes
    _handlers() {
        return {
            onNoteSelect: noteId => {
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "New Note",
                    body: "Take note..."
                };

                NotesAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title, body) => {
                NotesAPI.saveNote({
                    id: this.activeNote.id,
                    title,
                    body
                });

                this._refreshNotes();
            },
            onNoteDelete: noteId => {
                NotesAPI.deleteNote(noteId);
                this._refreshNotes();
            },
        };
    }
}