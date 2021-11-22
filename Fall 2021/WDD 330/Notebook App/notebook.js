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
    noteSmallTitle.innerHTML += 'Note Title';
    grabThis.appendChild(noteSmallTitle);

    //create and add class for the body
    var noteSmallBody = document.createElement('div');
    noteSmallBody.classList.add('noteSmallBody');
    noteSmallBody.innerHTML += 'Note Content';
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
    document.addEventListener('change', updateValue);
    //Take the information from the input and the text area and save them to local storage
    var titleLocal = document.querySelector('.notesTitle').value;
    console.log(titleLocal);
    function updateValue(e) {
        localStorage.setItem('note', titleLocal);
    }
    
    //Take the information from local storage and add the note details into the side bar
        // var addTitle = document.querySelector('.noteSmallTitle')
    // titleLocal.appendChild(addTitle);
}