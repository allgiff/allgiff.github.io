import NotesAPI from "./NotesAPI";

NotesAPI.saveNote({
    title: "New Note",
    body: "I am a new note"
});

console.log(NotesAPI.getAllNotes());