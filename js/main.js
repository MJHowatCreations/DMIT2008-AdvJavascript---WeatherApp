// Enter a location for weather information

//need an event listener that listens to the click of the button and grabs the id="location" text value
document.querySelector('[type="submit"]').addEventListener('click', function(evt){
    var locationForm = document.querySelector('[name="location"]');

    document.querySelector('h1').innerHTML = locationForm.value; 


    
    evt.preventDefault(); 
})


//View current climate information for the location


//yahoo api example "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="london, on")" we receive a json object
//current temp object is "item"



//View the 5 day forecast for the location

//json object contains forecast list with 5 values for the next 5 days. key values pairs are: "code" "date" "day" "high" "low" "text"


