class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: "",
            temperature: "c"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        // console.log("Submit: " + this.state.location + ":" + this.state.temp);
        // console.log(this.state);
        this.props.submitListener(this.state);
    }
    handleChange(evt){
        // console.log(`YAAAAA changed ${evt.target.id}`);
        // console.log(`Value was ${evt.target.value}`);
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