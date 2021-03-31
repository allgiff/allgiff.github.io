window.addEventListener('load', () => {
    //const serverName = "https://127.0.0.1:5500/ice/temples/"
    fetch(templesList.json)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple);
            });
        });
});

function buildTempleCard(temple) {
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("templecard");

    card.innerHTML = `<h2>${temple.name}</h2>
                          <img src="${temple.imageurl}" alt="${temple.name}">
                          <p>Address:<br><b>${temple.address1}<br>${temple.city}, ${temple.state} ${temple.zip}</b></p>
                          <p>Telephone:<br><b>${temple.phone}</b>
                          <p>Services:<br><b>${temple.services[0]}<br>${temple.services[1]}<br>${temple.services[2]}<br>${temple.services[3]}</b></p>
                          <p>Closures:<br><b>${temple.closures}</b></p>
                          <p>Schedule:<br><b>${temple.schedule}</b></p>
                          
                          <h3 class="hero-title">Weather</h3>
                          <img src="" class="frcstimg1" id="current-img${temple.id}"></p>
                          <p>Current Weather: <strong><span id="current-condition${temple.id}"></span></strong></p>
                          <p>Temperature: <strong><span id="current-temp${temple.id}"></span>&#176; F</strong></p>

                          `;
    document.querySelector("#temples").appendChild(card);
}

window.addEventListener('load', () => {

    const portland = 'https://api.openweathermap.org/data/2.5/forecast?id=5746545&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(portland)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('current-img1').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('current-img1').setAttribute('alt', jsObject.list[0].weather[0].description);
            document.getElementById('current-condition1').textContent = jsObject.list[0].weather[0].main;
            document.getElementById('current-temp1').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

    const laie = 'https://api.openweathermap.org/data/2.5/forecast?id=5856195&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(laie)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('current-img2').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('current-img2').setAttribute('alt', jsObject.list[0].weather[0].description);
            document.getElementById('current-condition2').textContent = jsObject.list[0].weather[0].main;
            document.getElementById('current-temp2').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

    const sanDiego = 'https://api.openweathermap.org/data/2.5/forecast?id=5391811&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(sanDiego)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('current-img3').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('current-img3').setAttribute('alt', jsObject.list[0].weather[0].description);
            document.getElementById('current-condition3').textContent = jsObject.list[0].weather[0].main;
            document.getElementById('current-temp3').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

    const draper = 'https://api.openweathermap.org/data/2.5/forecast?id=5774001&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(draper)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('current-img4').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('current-img4').setAttribute('alt', jsObject.list[0].weather[0].description);
            document.getElementById('current-condition4').textContent = jsObject.list[0].weather[0].main;
            document.getElementById('current-temp4').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

});