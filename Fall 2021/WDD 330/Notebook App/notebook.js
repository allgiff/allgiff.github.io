document.addEventListener(onload, getLocal());

function createNote() {
    let grabThis = document.querySelector('.notesList');
    let grabMainNote = document.querySelector('.notesPreview');
    let delTitle = document.querySelector('.notesTitle');
    let delBody = document.querySelector('.noteBody');
    delTitle.remove();
    delBody.remove();

    //This is for the sidebar, under the add notes button.
    //create and add a class for the whole list item
    var notesListItem = document.createElement('div');
    notesListItem.classList.add('notesListItem');
    grabThis.appendChild(notesListItem);

    //create and add class for the title
    var noteSmallTitle = document.createElement('div');
    noteSmallTitle.classList.add('noteSmallTitle');
    grabThis.appendChild(noteSmallTitle);

    //create and add class for the body
    var noteSmallBody = document.createElement('div');
    noteSmallBody.classList.add('noteSmallBody');
    grabThis.appendChild(noteSmallBody);

    //create and add class for last updated date
    var noteSmallUpdated = document.createElement('div');
    noteSmallUpdated.classList.add('noteSmallUpdated');
    noteSmallUpdated.innerHTML += 'Last Updated:';
    grabThis.appendChild(noteSmallUpdated);

    //this is for the main note that you write in
    //create the title of the note and assign a class
    var notesTitle = document.createElement('input');
    notesTitle.classList.add('notesTitle');
    grabMainNote.appendChild(notesTitle);
    notesTitle.placeholder = 'Note Title';

    //create the body of the note and assign a class and placeholder
    var noteBody = document.createElement('textarea');
    noteBody.classList.add('noteBody');
    grabMainNote.appendChild(noteBody);
    noteBody.placeholder = 'Start Writing!';

    userContent();
}

function userContent() {
    //make sure the listener only fires when the title is changed
    var addTitle = document.querySelector('.notesTitle');
    addTitle.addEventListener('change', updateTitle);
    //make sure the listener only fires when the body is changed
    var addBody = document.querySelector('.noteBody');
    addBody.addEventListener('change', updateBody);

    //Take the information from the input and save them to local storage
    function updateTitle(e) {
        var titleLocal = document.querySelector('.notesTitle').value;
        localStorage.setItem('Note Title', titleLocal);

        //Take the information from local storage and add the note details into the side bar
        var addTitle = document.querySelector('.noteSmallTitle');
        var textToAdd = document. createTextNode(titleLocal);
        addTitle.appendChild(textToAdd);
    }
    
    //Take the information from the text area and save them to local storage
    function updateBody(e) {
        var bodyLocal = document.querySelector('.noteBody').value;
        localStorage.setItem('Note Body', bodyLocal);

        //Take the information from local storage and add the note details into the side bar
        var addSideBody = document.querySelector('.noteSmallBody');
        var textAdd = document. createTextNode(bodyLocal);
        addSideBody.appendChild(textAdd);
    }
}

function getLocal() {
    //take the information from local storage and add it back onto the site on page load
    //create the title of the note and assign a class
    var notesTitle = document.createElement('input');
    notesTitle.classList.add('notesTitle');
    let grabMainNote = document.querySelector('.notesPreview');
    grabMainNote.appendChild(notesTitle);
    //body
    var notesBody = document.createElement('textarea');
    notesBody.classList.add('noteBody');
    let grabNote = document.querySelector('.notesPreview');
    grabNote.appendChild(notesBody);
    //sidebar
    let getThis = document.querySelector('.notesList');
    var noteSmallT = document.createElement('div');
    noteSmallT.classList.add('noteSmallTitle');
    getThis.appendChild(noteSmallT);
    //sidebody
    var noteSmallB = document.createElement('div');
    noteSmallB.classList.add('noteSmallBody');
    getThis.appendChild(noteSmallB);
    reAddLocal();
}
    
function reAddLocal() {
    //Grab items from local storage and add them back onto the document
    //title
    let grab = localStorage.getItem('Note Title');
    var text = document.createTextNode(grab);
    var add = document.querySelector('.notesTitle');
    add.value = grab;
    let small = document.querySelector('.noteSmallTitle');
    small.appendChild(text);

    //body
    let get = localStorage.getItem('Note Body');
    let nab = document.createTextNode(get);
    let nab2 = document.createTextNode(get);
    let place = document.querySelector('.noteBody')
    place.appendChild(nab);
    let smallBod = document.querySelector('.noteSmallBody');
    smallBod.appendChild(nab2);

    userContent();
}

const input = document.querySelector('input[type="search"]', 'button[type="search]');

//search the local storage array for a match
input.addEventListener('keyup', () => {
    let searchString = input.value.toLowerCase();
    console.log(searchString);
    //grab the notes from local storage and add them to an array
var storedNoteTitle = localStorage.getItem("Note Title");
var storedNoteBody = localStorage.getItem("Note Body");
storedNoteTitle = [];
storedNoteBody = [];
    var filtered = storedNoteTitle.filter(storedNoteTitle => {
        return (storedNoteTitle.toLowerCase().includes(searchString) || storedNoteBody.toLocaleLowerCase().includes(searchString));
        
    });
    reAddLocal(filtered);
        
})