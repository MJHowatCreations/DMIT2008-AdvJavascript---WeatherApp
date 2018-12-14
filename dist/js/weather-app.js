function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var WeatherApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WeatherApp, _React$Component);

  function WeatherApp(props) {
    var _this;

    _classCallCheck(this, WeatherApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WeatherApp).call(this, props));

    if (props.result) {
      _this.state = {
        city: _this.props.result.location.city,
        region: _this.props.result.location.region,
        condition: _this.props.result.item.condition.text,
        currentDate: _this.props.result.item.condition.date,
        currentTemp: _this.props.result.item.condition.temp,
        sunset: _this.props.result.astronomy.sunset,
        sunrise: _this.props.result.astronomy.sunrise,
        forecast: _this.props.result.item.forecast,
        temperature: _this.props.temperature,
        displayCurrentTemp: _this.state.currentTemp + " " + _this.state.temperature,
        displayLocation: _this.state.city + ", " + _this.state.region
      };
    } else {
      _this.state = {
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
      };
    }

    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(WeatherApp, [{
    key: "handleChange",
    value: function handleChange(evt) {
      evt.preventDefault();
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", null, React.createElement("h1", null, "Weather Update"), React.createElement("div", null, "Location: ", this.state.displayLocation), React.createElement("div", null, "Date: ", this.statecurrentDate), React.createElement("div", null, "Conditions: ", this.state.condition), React.createElement("div", null, "Current Temp: ", this.state.displayCurrentTemp), React.createElement("div", null, "Sunrise: ", this.state.sunrise), React.createElement("div", null, "Sunset: ", this.state.sunset), React.createElement("div", {
        className: "forecast"
      }, React.createElement("ul", null, this.state.forecast.map(function (item) {
        return React.createElement("li", null, item.day, " ", item.date, " : hi | ", item.high, " ", _this2.state.temperature, ", low | ", item.low, " ", _this2.state.temperature);
      }))));
    }
  }]);

  return WeatherApp;
}(React.Component);

export default WeatherApp;