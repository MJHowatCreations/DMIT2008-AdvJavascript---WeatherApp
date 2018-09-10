// Enter a location for weather information

//need an event listener that listens to the click of the button and grabs the id="location" text value

$('.frm.weather').on('submit', function(evt) {
    const   location = $(evt.target).find('[name=location]').val(),
            query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location + "') and u = 'c'",
            endpoint = "https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&env=store://datatables.org/alltableswithkeys";


    $.getJSON(endpoint, function (data) {
        console.log(data);


    });


    evt.preventDefault(); 


});



//View current climate information for the location


//yahoo api example "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="london, on") and u = 'c'" we receive a json object
//current temp object is "item"



//View the 5 day forecast for the location

//json object contains forecast list with 5 values for the next 5 days. key values pairs are: "code" "date" "day" "high" "low" "text"


