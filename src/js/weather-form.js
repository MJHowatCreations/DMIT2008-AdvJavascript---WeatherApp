class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: "",
            temp: "c"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        console.log(this.state.location + ":" + this.state.temp);
        this.props.submitListener(this.state);
    }
    handleChange(evt){
        console.log(`YAAAAA changed ${evt.target.id}`);
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
                        <input type="radio" name="temperature" onChange={this.handleChange} value="c" text="Celsius" />
                        <input type="radio" name="temperature" onChange={this.handleChange} value="f" text="Fahrenheit" />
                    </fieldset>
                </form>
            </div>
        );
    }

}

export default WeatherForm;