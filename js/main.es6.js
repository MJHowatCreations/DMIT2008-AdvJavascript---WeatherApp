/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the 
 * Yahoo! weather API.
 *
 *
 */

/**
 * Displays a weather forecast for a given location.
 * @param {Object[]} data - The array of forecast weather objects.
 * @param {Object} location - The location to display weather data.
*/
const displayForecast = function(data, location) {
    let output = '<ul>';

    for (let i = 0, len = data.length; i < len; i += 1) {
        const   {day, date, high, low} = data[i];
        output += `<li>${day} ${date} : hi | ${high}, low | ${low}</li>`;
    }
    output += '</ul>';
    location.innerHTML = output;
}

/**
 * Displays the current weather conditions for a given location.
 * @param {Object} data - The weather data object.
 * @param {boolean} showForecast - Whether to display the forecast or not
*/
    const displayWeather = function(data, showForecast) {
    const   loc = document.querySelector('.details>.location'),
            date = document.querySelector('.details>.date'),
            conditions = document.querySelector('.details>.conditions'),
            temp = document.querySelector('.details>.temp'),
            sunrise = document.querySelector('.details>.sunrise'),
            sunset = document.querySelector('.details>.sunset'),
            forecast = document.querySelector('.forecast');

    // display the current weather data

    loc.innerHTML = `${data.location.city}, ${data.location.region}`;
    date.innerHTML = `${new Date().toLocaleString()}`
    conditions.innerHTML = `${data.item.condition.text}`;
    temp.innerHTML = `${data.item.condition.temp}&#176 C`;
    sunrise.innerHTML =`${data.astronomy.sunrise}`;
    sunset.innerHTML = `${data.astronomy.sunset}`;

    if (!!showForecast) {
        // display the forecast
        displayForecast(data.item.forecast, forecast);
    }
}

    // Event listener for retrieving a weather forecast

document.querySelector('.frm.weather').addEventListener('submit', (evt) => {
    
    evt.preventDefault();

    const   location = evt.target[0].value,
            query = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '") and u="c"',
            endpoint = 'https://query.yahooapis.com/v1/public/yql?q=' + query + '&format=json&env=store/datatables.org/alltableswithkeys'; 
    let     data,
            xhr = new XMLHttpRequest();
        
    xhr.open('GET', endpoint, true);
    xhr.send();
    xhr.addEventListener('load', (evt) => {
        if (xhr.status == 200) {
            data = JSON.parse(xhr.responseText);
            data = data.query.results.channel;
            displayWeather(data, true);
        }
    });
});
