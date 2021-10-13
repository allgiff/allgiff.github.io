document.addEventListener('DOMContentLoaded', getToDos);


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
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
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

  //add to local storage
  saveLocalToDo(inputValue);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  removeLocalToDos(todo);
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
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      }
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
function removeLocalToDos(todo) {
    //check if there are to-dos in the storage 
  if (localStorage.getItem('todo') === null) {
    todo = [];
  }
  else {
    todo = JSON.parse(localStorage.getItem('todo'));
  }
  console.log(todo);
}
