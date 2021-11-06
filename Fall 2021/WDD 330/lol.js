window.addEventListener('load', () => {
    //const serverName = "https://127.0.0.1:5500/ice/temples/"
    const requestURL = "https://swapi.dev/api/starships/9/"
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            i = 1;
            Object.entries(jsonObject).forEach(([key, name]) => {
                buildShipCard(name, i);
                i++;
            });
        });
});

function buildShipCard(name, i) {
    console.log(name);
    let card = document.createElement("section");
    card.classList.add("shipcard");
    card.innerHTML = `<h2>${starships.name}</h2>
                          <div id="info">

                          </div>`;
    
    document.querySelector("#starships").appendChild(card);
}