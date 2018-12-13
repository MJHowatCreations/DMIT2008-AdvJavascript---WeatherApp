import WeatherApp from "./weather-app.js";
import WeatherForm from "./weather-form.js";
/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the 
 * Yahoo! weather API.
 *
 *
 */

/* Handlebars.registerHelper('currentDate', () => {
    return new Date().toLocaleString()
});
Handlebars.registerHelper('temperature', (temperatureScale = 'c') => {
    temperatureScale = document.querySelector('input[name="temperature"]:checked').value;
    if (temperatureScale == 'c')
        return '°C';
    else
        return '°F';

}); */

class MainApp extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           isLoaded: false,
           temperature: "c",
           json: null,
           error: null,
           location: "edmonton", //e.target.querySelector('[name=location]').value,
           query: `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="${temperatureScale}"&format=json&env=store/datatables.org/alltableswithkeys`,
           fullQuery: `https://query.yahooapis.com/v1/public/yql?q=${query}`
       }
       this.queryWeatherForm = this.queryWeatherForm.bind(this);
   }
   queryWeatherForm(query){
       console.log(query.location + ":" + query.temp);
   }
   componentDidMount() {
        // let temperatureScale = document.querySelector('input[name="temperature"]:checked').value;
        
        fetch(this.state.fullQuery)
            .then(data => data.json()) // see Response.json() in the Fetch API spec
            .then(
                (result) => {
                    result = result.query.results.channel;
                    this.setState({
                        isLoaded: true,
                        json: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            );
   } 
   render() {
        const { error, isLoaded, json } = this.state;
        let msg = "";
        if (error) {
            msg = error.message;
            // return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            msg = "Loading...";
            // return <div>Loading...</div>;
        }
        return(
            <div>
                <div>
                    <WeatherForm submitListener={this.queryWeatherForm}/>
                </div>                
                <div>
                    <h3>{msg}</h3>
                    <WeatherApp props={this.state.json} temperature={this.state.temperature}/>
                </div>
            </div>
        );
   }
}


// 
ReactDOM.render(<MainApp/>, document.querySelector('.react-app'));
        


// document.querySelector('.frm.weather').addEventListener('submit', (e) => {
//     e.preventDefault();
    
// });

 