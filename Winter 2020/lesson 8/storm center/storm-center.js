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

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
    const s = document.querySelector('#selected')
    const sel = document.querySelector('#selectbrowser');
    s.style.display = "block";
    s.textContent = sel.value;

}