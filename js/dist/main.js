;

(function () {
  "use strict";

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
  var displayForecast = function displayForecast(data, location) {
    var output = '<ul>';

    for (var i = 0, len = data.length; i < len; i += 1) {
      var _data$i = data[i],
          day = _data$i.day,
          date = _data$i.date,
          high = _data$i.high,
          low = _data$i.low;
      output += "<li>".concat(day, " ").concat(date, " : hi | ").concat(high, ", low | ").concat(low, "</li>");
    }

    output += '</ul>';
    location.innerHTML = output;
  };
  /**
   * Displays the current weather conditions for a given location.
   * @param {Object} data - The weather data object.
   * @param {boolean} showForecast - Whether to display the forecast or not
  */


  var displayWeather = function displayWeather(data, showForecast) {
    var loc = document.querySelector('.details>.location'),
        date = document.querySelector('.details>.date'),
        conditions = document.querySelector('.details>.conditions'),
        temp = document.querySelector('.details>.temp'),
        sunrise = document.querySelector('.details>.sunrise'),
        sunset = document.querySelector('.details>.sunset'),
        forecast = document.querySelector('.forecast'); // display the current weather data

    loc.innerHTML = "".concat(data.location.city, ", ").concat(data.location.region);
    date.innerHTML = "".concat(new Date().toLocaleString());
    conditions.innerHTML = "".concat(data.item.condition.text);
    temp.innerHTML = "".concat(data.item.condition.temp, "&#176 C");
    sunrise.innerHTML = "".concat(data.astronomy.sunrise);
    sunset.innerHTML = "".concat(data.astronomy.sunset);

    if (!!showForecast) {
      // display the forecast
      displayForecast(data.item.forecast, forecast);
    }
  };
  /**
   * Grabs the text from the input and makes a Yahoo API request string then creates a AJAX request
   * @param {Object} evt - The default form submission event
  */


  document.querySelector('.frm.weather').addEventListener('submit', function (evt) {
    var location = evt.target[0].value,
        query = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '") and u="c"',
        endpoint = 'https://query.yahooapis.com/v1/public/yql?q=' + query + '&format=json&env=store/datatables.org/alltableswithkeys';
    fetch(endpoint).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request failed - ".concat(response.status, " : ").concat(response.statusText, " "));
      }
    }).then(function (data) {
      displayWeather(data.query.results.channel, true);
    }).catch(function (err) {
      document.querySelector('.forecast').innerHTML = "<ul><li>".concat(err, "</li></ul>");
    });
    evt.preventDefault();
  });
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
})();
