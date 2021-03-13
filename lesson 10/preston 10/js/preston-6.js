//javascript for footer date
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var weekday = new Array(7);
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";

var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
var day = n.getDay() - 1;
document.getElementById("date").innerHTML = weekday[day] + ", " + d + " " + monthNames[m] + " " + y;


//javascript for nav - hamburger menu
window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

    window.onresize = () => { if (window.innerwidth > 760) mainnav.classList.remove('responsive'); };
});

//nav wayfinding - active page 
function navLocation() {
    var i = 0;
    var currentPage = url[url.length - 1];
    for (i; i < navLinks.length; i++) {
        var lb = navLinks[i].href.split("/");
        if (lb[lb.length - 1] == currentPage) {
            navLinks[i].className = "active";

        }
    }
}

//javascript for pancake banner
function toggleMenu() {
    let day = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
}

if (day == 4) {
    document.getElementById('pancake').style.display = "block";
} else {
    document.getElementById('pancake').style.display = "none";
}
//javascript for the weather summary and 5 day forcasts//
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial"
const apiUrl2 = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial"

fetch(apiUrl)
    .then(Response => { return Response.json();})
    .then(jsonObject => {
        console.table(jsonObject);
        table = jsonObject;

        document.getElementById('condition').innerHTML = table.weather[0].description;
        document.getElementById('temp').innerHTML = table.main.temp_max;
        document.getElementById('wind-chill').innerHTML = table.wind.deg;
        document.getElementById('humidity').innerHTML = table.main.humidity;
        document.getElementById('speed').innerHTML = table.wind.speed;
    })

let day = new Array(7);
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";