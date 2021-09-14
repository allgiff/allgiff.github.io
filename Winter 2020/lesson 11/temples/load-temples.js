window.addEventListener('load', () => {
    //const serverName = "https://127.0.0.1:5500/ice/temples/"
    const requestUrl = "temples2.json"
    fetch(requestUrl)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key,temple]) => {  
                buildTempleCard(temple);
            });
        });
});
function buildTempleCard(temple) {
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
        <img src = "${temple.imageurl}" alt = "${temple.name}"
        <p> <br> First president: <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b></p>
        <p> Current president: <b>${temple.presidents[temple.presidents.length - 1]}</b></p>`;
    document.querySelector('#temples').appendChild(card);
}