function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var WeatherForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WeatherForm, _React$Component);

  function WeatherForm(props) {
    var _this;

    _classCallCheck(this, WeatherForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WeatherForm).call(this, props));
    _this.state = {
      location: "",
      temperature: "c",
      query: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.buildQuery = _this.buildQuery.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(WeatherForm, [{
    key: "buildQuery",
    value: function buildQuery(location, temp) {
      // console.log(location +":"+temp);
      var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"".concat(location, "\") and u=\"").concat(temp, "\"&format=json&env=store/datatables.org/alltableswithkeys"),
          fullQuery = "https://query.yahooapis.com/v1/public/yql?q=".concat(query); // console.log(`Query: ${query}`);
      // console.log(`Full: ${fullQuery}`);

      return fullQuery;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(evt) {
      evt.preventDefault(); // console.log("Submit: " + this.state.location + ":" + this.state.temp);
      // console.log(this.state);

      this.setState({
        query: this.buildQuery(this.state.location, this.state.temperature)
      });
      this.props.submitListener(this.state);
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      // console.log(`YAAAAA changed ${evt.target.id}`);
      // console.log(`Value was ${evt.target.value}`);
      var obj = {};
      obj[evt.target.getAttribute('name')] = evt.target.value;
      this.setState(obj);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        className: "frm weather",
        onSubmit: this.handleSubmit
      }, React.createElement("label", {
        htmlFor: "location"
      }, "Location"), React.createElement("input", {
        type: "text",
        id: "location",
        name: "location",
        onChange: this.handleChange
      }), React.createElement("button", {
        onClick: this.handleSubmit,
        type: "submit"
      }, "Get Weather"), React.createElement("fieldset", {
        className: "frm temperature"
      }, React.createElement("input", {
        type: "radio",
        id: "temperature",
        name: "temperature",
        onChange: this.handleChange,
        value: "c",
        defaultChecked: true,
        text: "Celsius"
      }), React.createElement("label", {
        htmlFor: "temperature"
      }, "Celsius"), React.createElement("input", {
        type: "radio",
        id: "temperature",
        name: "temperature",
        onChange: this.handleChange,
        value: "f",
        text: "Fahrenheit"
      }), React.createElement("label", {
        htmlFor: "temperature"
      }, "Fahrenheit"))));
    }
  }]);

  return WeatherForm;
}(React.Component);

export default WeatherForm;