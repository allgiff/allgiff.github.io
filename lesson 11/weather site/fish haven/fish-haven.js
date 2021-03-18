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

//javascript for the weather summary and 5 day forcasts//
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial"

fetch(apiUrl)
    .then(response => response.json())
    .then(jsObject => {
        console.table(jsObject);
        table = jsObject;

        document.getElementById('condition').innerHTML = table.weather[0].description;
        document.getElementById('temp').innerHTML = table.main.temp_max;
        document.getElementById('wind-chill').innerHTML = table.wind.deg;
        document.getElementById('humidity').innerHTML = table.main.humidity;
        document.getElementById('speed').innerHTML = table.wind.speed;
    });
const apiUrlForc = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial"
fetch(apiUrlForc)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);

        let days = new Array(7);
        days[0] = "Sun";
        days[1] = "Mon";
        days[2] = "Tues";
        days[3] = "Wed";
        days[4] = "Thur";
        days[5] = "Fri";
        days[6] = "Sat";

        const fiveDays = document.getElementsByClassName('fiveDays');
        const replaceTime = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        for (var i = 0; i < replaceTime.length; i++) {

            const imgsrc = 'https://openweathermap.org/img/w/' + replaceTime[i].weather[0].icon + '.png';
            fiveDays[i].childNodes[2].innerHTML = replaceTime[i].main.temp + " &degF";
            fiveDays[i].childNodes[1].src = imgsrc;
            fiveDays[i].childNodes[0].innerHTML = days[new Date(replaceTime[i].dt * 1000).getDay()];

            console.log(fiveDays);
            console.log(replaceTime[i]);
            console.log(imgsrc);
        }
    });