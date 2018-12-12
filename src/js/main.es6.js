/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the 
 * Yahoo! weather API.
 *
 *
 */
import WeatherApp from "./weather-app.js";
Handlebars.registerHelper('currentDate', () => {
    return new Date().toLocaleString()
});
Handlebars.registerHelper('temperature', (temperatureScale = 'c') => {
    temperatureScale = document.querySelector('input[name="temperature"]:checked').value;
    if (temperatureScale == 'c')
        return '°C';
    else
        return '°F';

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
    let temperatureScale = document.querySelector('input[name="temperature"]:checked').value;
    let location = e.target.querySelector('[name=location]').value,
        query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="${temperatureScale}"&format=json&env=store/datatables.org/alltableswithkeys`;

    fetch(`https://query.yahooapis.com/v1/public/yql?q=${query}`)
        .then(data => data.json()) // see Response.json() in the Fetch API spec
        .then(json => {
            json = json.query.results.channel;
            displayWeather(json, document.querySelector('.weather-display'));
    });
});

ReactDom.render(<WeatherApp props={json.query.results.channel}/>);
 