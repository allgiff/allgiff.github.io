//event listener for local storage retreival
document.addEventListener('DOMContentLoaded', getToDos);

//item creation functions

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  (function (index) {
    close[i].onclick = function () {
      removeLocalToDos(index, this.parentElement);
    }
  })(i);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("toDo").appendChild(li);
  }
  document.getElementById("input").value = "";

  //call function and add item to local storage
  saveLocalToDo(inputValue);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
      (function (index) {
    close[i].onclick = function () {
      removeLocalToDos(index, this.parentElement);
    }
  })(i);
  }
}




//functions for filtering the items based on completion

function filterItems() {
  if (document.getElementsByClassName('checked') === true) {
    //display only the checked items
  }
  else {
    //show only the unchecked items
  }
}




//functions for local storage

//save to local storage
function saveLocalToDo(toDo) {
  //check if there are to-dos in the storage 
  let toDos;
  if (localStorage.getItem('toDos') === null) {
    toDos = [];
  }
  else {
    toDos = JSON.parse(localStorage.getItem('toDos'));
  }
  //put the todos into the list
  toDos.push(toDo);
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

//add items back onto list
function getToDos() {
  let toDos;
    //check if there are to-dos in the storage 
  if (localStorage.getItem('toDos') === null) {
    toDos = [];
  }
  else {
    toDos = JSON.parse(localStorage.getItem('toDos'));
  }
  toDos.forEach(function (todo) {
      var li = document.createElement("li");
  var inputValue = todo;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  }
  else {
    document.getElementById("toDo").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

    for (i = 0; i < close.length; i++) {
  (function (index) {
    close[i].onclick = function () {
      removeLocalToDos(index, this.parentElement);
    }
  })(i);
    }
    // Add a checkmark when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);
  });
}

//remove an item from storage after it has been deleted from list
function removeLocalToDos(i, element) {
  let toDos = [];
    //check if there are to-dos in the storage 
  if (localStorage.getItem('toDos') !== null) {
   toDos = JSON.parse(localStorage.getItem('toDos'));
  }
  toDos.splice(i, 1);
  localStorage.setItem('toDos', JSON.stringify(toDos));
  element.remove();
}