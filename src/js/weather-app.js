
class WeatherApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: this.props.location.city,
            region: this.props.location.region,
            currentDate: new Date().toLocaleString(),
            condition: this.props.item.condition.text,
            currentTemp: this.props.item.condition.temp,
            sunset: this.props.astronomy.sunset,
            sunrise: this.props.astronomy.sunrise,
            forecast: this.props.forecast,
            temperature: this.props.temperature,
            displayCurrentTemp: this.state.currentTemp + " " + this.state.temperature
        }
    }
    render () {
        return (
            <div>
            <h1>Weather Update</h1>
            <div>Location: {this.state.city}, {this.state.region}</div>
            <div>Date: {this.statecurrentDate}</div>
            <div>Conditions: {this.state.condition}</div>
            <div>Current Temp: {this.state.displayCurrentTemp}</div>
            <div>Sunrise: {this.state.sunrise}</div>
            <div>Sunset: {this.state.sunset}</div>
            <div class="forecast">
            <ul>            
                {this.state.forecast.map((item) => 
                    <li>{item.day} {item.date} : hi | {item.high} {this.state.temperature}, low | {item.low} {this.state.temperature}</li>
                )}
            </ul>
            </div>
            </div>  
        );
    }
}

export default WeatherApp;