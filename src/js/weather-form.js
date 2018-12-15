class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: "",
            temperature: "c",
            query: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.buildQuery = this.buildQuery.bind(this);
    }
    buildQuery(location,temp){
        let query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="${temp}"&format=json&env=store/datatables.org/alltableswithkeys`,
        fullQuery = `https://query.yahooapis.com/v1/public/yql?q=${query}`;
        return fullQuery;
   }
    handleSubmit(evt) {
        evt.preventDefault();

        this.setState({
            query: this.buildQuery(this.state.location,this.state.temperature)
        })
        this.props.submitListener(this.state);
    }
    handleChange(evt){

        let obj = {};
        obj[evt.target.getAttribute('name')] = evt.target.value;
        this.setState(obj);
    }
    render() {
        return (
            <div>
                <form className="frm weather" onSubmit={this.handleSubmit}>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit} type="submit">Get Weather</button>
                    <fieldset className="frm temperature">
                        <input type="radio" id="temperature" name="temperature" onChange={this.handleChange} value="c" defaultChecked text="Celsius" />
                        <label htmlFor="temperature">Celsius</label>
                        <input type="radio" id="temperature" name="temperature" onChange={this.handleChange} value="f" text="Fahrenheit" />
                        <label htmlFor="temperature">Fahrenheit</label>
                    </fieldset>
                </form>
            </div>
        );
    }

}

export default WeatherForm;