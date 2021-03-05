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
//javascript for home page data
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        /* Preston */
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = towns[5].name
        card.appendChild(h2);
        document.querySelector('div.card1').appendChild(card);

        let founded = document.createElement('p');
        founded.textContent = "Year Founded: " + towns[5].yearFounded;
        card.appendChild(founded);

        let population = document.createElement('p');
        population.textContent = "Current Population: " + towns[5].currentPopulation;
        card.appendChild(population);

        let rain = document.createElement('p');
        rain.textContent = "Average Yearly Rainfall: " + towns[5].averageRainfall + " inches";
        card.appendChild(rain);

        let cardimg = document.createElement('section');
        let image = document.createElement('img');
        cardimg.classList.add('one');
        image.setAttribute('src', 'images/' + towns[5].photo);
        cardimg.appendChild(image)
        document.querySelector('div.card1').appendChild(cardimg);


        /* Fish Haven */
        let card2 = document.createElement('section');
        card2.classList.add('cardtwo');
        let preston = document.createElement('h2');
        preston.textContent = towns[1].name
        card2.appendChild(preston);
        document.querySelector('div.card2').appendChild(card2);

        let founded2 = document.createElement('p');
        founded2.textContent = "Year Founded: " + towns[1].yearFounded;
        card2.appendChild(founded2);

        let population2 = document.createElement('p');
        population2.textContent = "Current Population: " + towns[1].currentPopulation;
        card2.appendChild(population2);

        let rain2 = document.createElement('p');
        rain2.textContent = "Average Yearly Rainfall: " + towns[1].averageRainfall + " inches";
        card2.appendChild(rain2);

        let cardimg2 = document.createElement('section');
        let image2 = document.createElement('img');
        cardimg2.classList.add('two');
        image2.setAttribute('src', 'images/' + towns[1].photo);
        cardimg2.appendChild(image2)
        document.querySelector('div.card2').appendChild(cardimg2);

        /* Soda Springs */
        let card3 = document.createElement('section');
        let soda = document.createElement('h2');
        soda.textContent = towns[6].name
        card3.appendChild(soda);
        document.querySelector('div.card3').appendChild(card3);

        let founded3 = document.createElement('p');
        founded3.textContent = "Year Founded: " + towns[6].yearFounded;
        card3.appendChild(founded3);

        let population3 = document.createElement('p');
        population3.textContent = "Current Population: " + towns[6].currentPopulation;
        card3.appendChild(population3);

        let rain3 = document.createElement('p');
        rain3.textContent = "Average Yearly Rainfall: " + towns[6].averageRainfall + " inches";
        card3.appendChild(rain3);


        let cardimg3 = document.createElement('section');
        let image3 = document.createElement('img');
        cardimg3.classList.add('two');
        image3.setAttribute('src', 'images/' + towns[6].photo);
        cardimg3.appendChild(image3)
        document.querySelector('div.card3').appendChild(cardimg3);
    });
