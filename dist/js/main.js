function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

var MainApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainApp, _React$Component);

  function MainApp(props) {
    var _this;

    _classCallCheck(this, MainApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainApp).call(this, props));
    _this.state = {
      isLoaded: false,
      json: null,
      error: null,
      temperature: '°C'
    };
    _this.queryWeatherForm = _this.queryWeatherForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchWeather = _this.fetchWeather.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MainApp, [{
    key: "queryWeatherForm",
    value: function queryWeatherForm(query) {
      var temp = "";
      if (query.temperature == 'c') temp = '°C';else temp = '°F';
      this.setState({
        temperature: temp
      });
      this.fetchWeather(query.query);
      console.log(this.state.json);
      this.forceUpdate();
    }
  }, {
    key: "fetchWeather",
    value: function fetchWeather(query) {
      var _this2 = this;

      fetch(query).then(function (data) {
        return data.json();
      }) // see Response.json() in the Fetch API spec
      .then(function (result) {
        result = result.query.results.channel; // console.log(result);

        _this2.setState({
          isLoaded: true,
          json: result
        });
      }, function (error) {
        _this2.setState({
          isLoaded: false,
          error: error
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          json = _this$state.json;
      var msg = "";

      if (error) {
        msg = error.message; // return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        msg = "Loading..."; // return <div>Loading...</div>;
      }

      return React.createElement("div", null, React.createElement("div", null, React.createElement(WeatherForm, {
        submitListener: this.queryWeatherForm
      }), React.createElement("h2", null, React.createElement("a", {
        href: "report.html"
      }, "See the React Report"))), React.createElement("div", null, React.createElement("h3", null, msg), React.createElement(WeatherApp, {
        result: this.state.json,
        temperature: this.state.temperature
      })));
    }
  }]);

  return MainApp;
}(React.Component); // 


ReactDOM.render(React.createElement(MainApp, null), document.querySelector('.react-app')); // document.querySelector('.frm.weather').addEventListener('submit', (e) => {
//     e.preventDefault();
// });
