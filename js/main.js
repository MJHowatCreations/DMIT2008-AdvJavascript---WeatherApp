// Enter a location for weather information

//need an event listener that listens to the click of the button and grabs the id="location" text value

(function($) {
    'use strict';

    function displayWeather(data, $el) {
        var $loc = $($el).find('.details>.location'),
            $date = $($el).find('.details>.date'),
            $conditions = $($el).find('.details>.conditions'),
            $currentTemp = $($el).find('.details>.temp'),
            $sunrise = $($el).find('.details>.sunrise'),
            $sunset = $($el).find('.details>.sunset');

            $loc.text(data.location.city + ', ' + data.location.region);
            $date.text(data.lastBuildDate);
            $conditions.text(data.item.condition.text);
            $currentTemp.text(data.item.condition.temp);
            $sunrise.text(data.astronomy.sunrise);
            $sunset.text(data.astronomy.sunset);

    }

    $('.frm.weather').on('submit', function(evt) {
        const   location = $(evt.target).find('[name=location]').val(),
                query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location + "') and u = 'c'",
                endpoint = "https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&env=store://datatables.org/alltableswithkeys";
        
        
        evt.preventDefault(); 

        $.getJSON(endpoint, function (data) {
            data = data.query.results.channel;
            displayWeather(data, $('.weather-display'));
        });
    });


}(jQuery));


//View current climate information for the location


//yahoo api example "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="london, on") and u = 'c'" we receive a json object
//current temp object is "item"



//View the 5 day forecast for the location

//json object contains forecast list with 5 values for the next 5 days. key values pairs are: "code" "date" "day" "high" "low" "text"


