window.addEventListener('load', (event)=> {
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})

//let dateNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//let d = new Date(); 
//let dayName = dateNames[d.getDay()];
//let monthName = months[d.getMonth()];
//let year = d.getFullYear(); 
//let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

//document.getElementById("currentdate").textContent = fulldate; 
