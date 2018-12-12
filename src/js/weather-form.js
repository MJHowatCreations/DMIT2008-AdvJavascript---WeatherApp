class WeatherForm extends React.Component{
    constructor(props){
        super(props);

    }
    
    render() {
        return (
            <div>
                <form className="frm weather">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location"/>
                    <button type="submit">Get Weather</button>
                    <fieldset className="frm temperature">
                        <input type="radio" name="temperature"  value="c" checked text="Celsius" />
                        <input type="radio" name="temperature" value="f"text="Fahrenheit" />
                    </fieldset>
                </form>
            </div>
        );
    }

}

export default WeatherForm;