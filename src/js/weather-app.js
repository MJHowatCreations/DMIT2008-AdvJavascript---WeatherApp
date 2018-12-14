
class WeatherApp extends React.Component{
    constructor(props){
        super(props);
        if (props.result){
            this.state = {
                city: this.props.result.location.city,
                region: this.props.result.location.region,
                condition: this.props.result.item.condition.text,
                currentDate: this.props.result.item.condition.date,
                currentTemp: this.props.result.item.condition.temp,
                sunset: this.props.result.astronomy.sunset,
                sunrise: this.props.result.astronomy.sunrise,
                forecast: this.props.result.item.forecast,
                temperature: this.props.temperature,
                displayCurrentTemp: this.state.currentTemp + " " + this.state.temperature,
                displayLocation: this.state.city + ", " + this.state.region
            }
        }else{
            this.state = {
                city: "",
                region: "",
                condition: "",
                currentTemp: "",
                sunset: "",
                sunrise: "",
                forecast: [],
                temperature: "",
                displayCurrentTemp: "",
                displayLocation: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){
        evt.preventDefault();
        this.forceUpdate();
    }
    render () {
        return (
            <div>
            <h1>Weather Update</h1>
            <div>Location: {this.state.displayLocation}</div>
            <div>Date: {this.statecurrentDate}</div>
            <div>Conditions: {this.state.condition}</div>
            <div>Current Temp: {this.state.displayCurrentTemp}</div>
            <div>Sunrise: {this.state.sunrise}</div>
            <div>Sunset: {this.state.sunset}</div>
            <div className="forecast">
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