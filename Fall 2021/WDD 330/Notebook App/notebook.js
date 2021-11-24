function createNote() {
    let grabThis = document.querySelector('.notesList');
    let grabMainNote = document.querySelector('.notesPreview');

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
    //Take the information from the input and save them to local storage
    function updateTitle(e) {
        var titleLocal = document.querySelector('.notesTitle').value;
        localStorage.setItem('Note Title', titleLocal);

        //Take the information from local storage and add the note details into the side bar
        var addTitle = document.querySelector('.noteSmallTitle');
        var textToAdd = document. createTextNode(titleLocal);
        addTitle.appendChild(textToAdd);
    }
    
    //make sure the listener only fires when the body is changed
    var addBody = document.querySelector('.noteBody');
    addBody.addEventListener('change', updateBody);
    
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