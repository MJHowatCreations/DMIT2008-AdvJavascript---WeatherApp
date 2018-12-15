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
           json: null,
           error: null,
           temperature: '°C'
       }
       this.queryWeatherForm = this.queryWeatherForm.bind(this);
       this.fetchWeather = this.fetchWeather.bind(this);
       
   }
   queryWeatherForm(query){
    let temp = "";
    if (query.temperature == 'c')
        temp = '°C';
    else
        temp = '°F';
    this.setState({
        temperature: temp
    })
    this.fetchWeather(query.query);
    console.log(this.state.json);
    this.forceUpdate();
   }
   fetchWeather(query){
        fetch(query)
        .then(data => data.json()) // see Response.json() in the Fetch API spec
        .then(
            (result) => {
                result = result.query.results.channel;
                // console.log(result);
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
   componentDidMount() {      
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
                    <h2><a href="report.html">See the React Report</a></h2>
                </div>                
                <div>
                    <h3>{msg}</h3>
                    <WeatherApp result={this.state.json} temperature={this.state.temperature}/>
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

 