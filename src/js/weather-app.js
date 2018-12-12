
class WeatherApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: this.props.location.city,
            region: this.props.location.region,
            currentDate: this.props.currentDate,
            condition: this.props.item.condition.text,
            currentTemp: this.props.item.condition.temp,
            sunset: this.props.astronomy.sunset,
            sunrise: this.props.astronomy.sunrise,
            forecast: this.props.forecast,
            day: this.props.day,
            date: this.props.date, 
            highTemp: this.props.high, 
            lowTemp: this.props.low,
            temperature: this.props.temperature,
            displayCurrentTemp: this.state.currentTemp + " " + this.state.temperature,
            displayDate: this.state.day + " " + this.state.date,
            displayHigh: this.state.highTemp + " " + this.state.temperature,
            displayLow: this.state.lowTemp + " " + this.state.temperature
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
            {/* for loop per forecast */}
              <ul>
                <li>{this.state.displayDate} : hi | {this.state.displayHigh}, low | {this.state.displayLow}</li>
              </ul>
            </div>
            </div>  
        );
    }
}

export default WeatherApp;