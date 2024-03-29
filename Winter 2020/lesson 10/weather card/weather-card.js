window.addEventListener("load",(e)=>{
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5605242&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    //document.querySelector('#imagesrc').textContent = imagesrc;  // informational specification only
    document.querySelector('#icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.querySelector('#icon').setAttribute('alt', desc);  
  });
} )
