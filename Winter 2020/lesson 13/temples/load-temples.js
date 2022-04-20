window.addEventListener('load', () => {
    //const serverName = "https://127.0.0.1:5500/ice/temples/"
    const requestURL = "https://allgiff.github.io/Winter%202020/lesson%2013/temples/templesList.json"
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            i = 1;
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple, i);
                i++;
            });
        });
});

function buildTempleCard(temple,i) {
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("templecard");
    card.innerHTML = `<h2>${temple.name}</h2>
                          <div id="info">
                          <img src="${temple.imageurl}" alt="${temple.name}">
                          <p><b>Address:</b><br>${temple.address1}<br>${temple.city}, ${temple.state}</p>
                          <p><b>Phone:</b><br>${temple.phone}</p>
                          <p><b>Email:</b><br>${temple.email}</p>
                          <p><b>Services:</b><br>${temple.services[0]}<br>${temple.services[1]}<br>${temple.services[2]}<br>${temple.services[3]}</p>
                          <p><b>Closures:</b><br>${temple.closures[0]}<br>${temple.closures[1]}<br>${temple.closures[2]}<br>${temple.closures[3]}</p>
                          <p id="sched"><b>Schedule:</b><br>${temple.schedule}</p>
                          <hr>
                          <p id="hist"><br>${temple.history}</p>
                          </div>
                          
                          <div id="weather">
                          <h3 class="hero-title">Weather</h3>
                          <img src="" class="weather-report1" id="img${i}"${temple.id}></p>
                          <p>Current Weather: <strong><span id="condition${i}"${temple.id}></span></strong></p>
                          <p>Temperature: <strong><span id="temp${i}"${temple.id}></span>&#176; F</strong></p></div>`;
    
    document.querySelector("#temples").appendChild(card);
}

window.addEventListener('load', () => {

    const portland = 'https://api.openweathermap.org/data/2.5/forecast?id=5746545&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(portland)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('img1').setAttribute("src", 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('img1').setAttribute("alt", jsObject.list[0].weather[0].description);
            document.getElementById('condition1').textContent = jsObject.list[0].weather[0].description;
            document.getElementById('temp1').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

    const laie = 'https://api.openweathermap.org/data/2.5/forecast?id=5856195&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(laie)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('img2').setAttribute("src", 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('condition2').textContent = jsObject.list[0].weather[0].description;
            document.getElementById('temp2').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

    const sanDiego = 'https://api.openweathermap.org/data/2.5/forecast?id=5391811&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(sanDiego)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('img3').setAttribute("src", 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('condition3').textContent = jsObject.list[0].weather[0].description;
            document.getElementById('temp3').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

    const draper = 'https://api.openweathermap.org/data/2.5/forecast?id=5774001&appid=041f99e7d94fca76b497fa7845e20bc4&units=imperial';

    fetch(draper)
        .then((response) => response.json())
        .then((jsObject) => {
            document.getElementById('img4').setAttribute("src", 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
            document.getElementById('condition4').textContent = jsObject.list[0].weather[0].description;
            document.getElementById('temp4').textContent = jsObject.list[0].main.temp;
            console.log(jsObject);
        });

});
