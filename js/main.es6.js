/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the 
 * Yahoo! weather API.
 *
 *
 */
Handlebars.registerHelper('currentDate', () => {
    return new Date().toLocaleString()
});


/**
 * Displays the current weather conditions for a given location.
 * @param {Object} data - The weather data object.
 * @param {{String}} el - The location we are appending the display weather to.
 *
 **/
const displayWeather = (data, el) => {
    el.innerHTML = Handlebars.templates['project'](data);
  };

/**
 * Grabs the text from the input and makes a Yahoo API request string then creates a AJAX request
 * @param {Object} e - The default form submission event
*/
document.querySelector('.frm.weather').addEventListener('submit', (e) => {
    e.preventDefault();

    let location = e.target.querySelector('[name=location]').value,
        query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="c"&format=json&env=store/datatables.org/alltableswithkeys`;

    fetch(`https://query.yahooapis.com/v1/public/yql?q=${query}`)
        .then(data => data.json()) // see Response.json() in the Fetch API spec
        .then(json => {
            json = json.query.results.channel;
            displayWeather(json, document.querySelector('.weather-display'));
    });
});
 




/**
 * Displays a weather forecast for a given location.
 * @param {Object[]} data - The array of forecast weather objects.
 * @param {Object} location - The location to display weather data.
*/
/*
const displayForecast = (data, location) => {
    let output = '<ul>';

    for (let i = 0, len = data.length; i < len; i += 1) {
        const   {day, date, high, low} = data[i];
        output += `<li>${day} ${date} : hi | ${high}, low | ${low}</li>`;
    }
    output += '</ul>';
    location.innerHTML = output;
}
*/

/**
 * An explict usage of Promises
 * @param {String} url - The ajax request string 
*/
/*
const fetchJSON = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', (evt) => {
            switch (xhr.status) {
                case 200:
                    try{
                        resolve(JSON.parse(xhr.responseText));
                    } catch (err) {
                        let e = new Error(`Could not parse result: ${err}.`)
                        reject(e);
                    }
                    break;
                default:
                    reject(`Error retrieving user data: ${xhr.status} - ${xhr.statusText}.`);
            }
        });
        xhr.addEventListener('error', (evt) => {
            reject('Error retrieving user data.');
        });
        xhr.open('get', url);
        xhr.send(null);
    });
};
*/

/*
const displayWeather = (data, showForecast) => {
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
}

*/
