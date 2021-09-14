const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
        .then((response) => response.json())
        .then((jsonObject) => {
            console.table(jsonObject);  // temporary checking for valid response and data parsing
            const towns = jsonObject['towns'];
            /* Preston */
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = towns[6].name
            card.appendChild(h2);
            document.querySelector('div.card1').appendChild(card);

            let founded = document.createElement('p');
            founded.textContent = "Year Founded: " + towns[6].yearFounded;
            card.appendChild(founded);

            let population = document.createElement('p');
            population.textContent = "Current Population: " + towns[6].currentPopulation;
            card.appendChild(population);

            let rain = document.createElement('p');
            rain.textContent = "Average Yearly Rainfall: " + towns[6].averageRainfall + " inches";
            card.appendChild(rain);

            let cardimg = document.createElement('section');
            let image = document.createElement('img');
            cardimg.classList.add('one');
            image.setAttribute('src', 'images/' + towns[6].photo);
            cardimg.appendChild(image)
            document.querySelector('div.card1').appendChild(cardimg);
        });
