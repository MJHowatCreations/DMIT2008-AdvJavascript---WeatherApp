
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
            temperature: this.props.temperature
        }
    }
    render () {
        return (
            <div>
            <h1>Weather Update</h1>
            <div>Location: {location.city}, {location.region}</div>
            <div>Date: {currentDate}</div>
            <div>Conditions: {item.condition.text}</div>
            <div>Current Temp: {item.condition.temp} {temperature}</div>
            <div>Sunrise: {astronomy.sunrise}</div>
            <div>Sunset: {astronomy.sunset}</div>
            <div class="forecast">
            {/* for loop per forecast */}
              <ul>
                <li>{day} {date} : hi | {high} {temperature}, low | {low} {temperature}</li>
              </ul>
            </div>
            </div>  
        );
    }
}