// import preact
import { h, render, Component } from 'preact';
import style from '../iphone/style';
import $ from 'jquery';
import React from 'react';
export default class Home extends Component {

  constructor( props )
  {
      super( props );
      // set states for country + city + wind speed + humidity + temp
      this.state.COUNTRY = "" ;
      this.state.CITY = "" ;
      this.state.WINDSPEED = "" ;
      this.state.HUMIDITY = "" ;
      this.state.temp = "" ;
      this.state.mapurl = "";
      this.state.cond = "";
      this.state.court = "";

      // show host location's weather as soon as app. has started
      this.fetchIPInfo() ;

  }

  // a call to fetch weather data via wunderground
  fetchWeatherData = () =>
  {

      // API URL with a structure of : http://api.wunderground.com/api/key/feature/q/country-code/city.json

      /*
                      neringa's weather API key = c78f1a13d2ca6971
                      our weather API key       = c5745d0a313c195d
      */

      var COUNTRY = this.state.COUNTRY ;
      var CITY    = this.state.CITY ;

      var url = "http://api.wunderground.com/api/c5745d0a313c195d/conditions/q/" + COUNTRY + "/" + CITY + ".json";
      $.ajax({
              url: url,
              dataType: "jsonp",
              success : this.parseWeatherResponse,
              error : function(req, err){ console.log('API call failed ' + err); }
      })

  }

  // a call to fetch IP information via ipinfo
  fetchIPInfo = () =>
  {

      var url = "http://ipinfo.io";
      $.ajax({
              url: url,
              dataType: "jsonp",
              success : this.parseIPResponse,
              error : function(req, err){ console.log('API call failed ' + err); }
      })
  }

	// rendering a function when the button is clicked
	render() {
            // check if temperature data is fetched, if so add the sign styling to the page
            const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		return (
              <div>
                  <h1 class={ style.h69 }>{ this.state.locate }</h1>
                  <div class={ style.temperature }>{ this.state.temp }<tiny>° &nbsp;</tiny><degree>c</degree></div>
                  <div class={ style.conditions }>{ this.state.cond }</div>

                  <div class= { style.winfo }>
                  <div class = { style.col1 }> <img src="../../assets/pictures/drop.png" alt="not working :(" style="width:30px;height:50px;"/><subtext><p>&nbsp; { this.state.HUMIDITY }</p></subtext></div>
                  <div class = { style.col4 }> <img src="../../assets/pictures/whiteline2.png" alt="not working :(" style="width:5px;height:60px;"/> </div>
                  <div class = { style.col2 }> <img src="../../assets/pictures/Logo2.png" alt="not working :(" style="width:65px;height:65px;"/></div>
                  <div class = { style.col5 }> <img src="../../assets/pictures/whiteline2.png" alt="not working :(" style="width:5px;height:60px;"/> </div>
                  <div class = { style.col3 }> <img src="../../assets/pictures/wind.png" alt="not working :(" style="width:50px;height:50px;"/><subtext><p>{ this.state.WINDSPEED } mph</p></subtext></div>
                  </div>
                  <div class= { style.borderline }> <img src="../../assets/pictures/whiteline.png" alt="not working :(" style="width:380px;height:5px;"/> </div>
                  <subtext2> CURRENT LOCATION </subtext2>
                  <div class= { style.mapinfo }><iframe width="380" height="360" frameborder="0" style="border:0" src={this.state.mapurl} allowfullscreen></iframe></div>
              </div>

		);
	}

  parseWeatherResponse = ( parsed_json ) =>
	{

			var location = parsed_json['current_observation']['display_location']['city'];
			var temp_c = parsed_json['current_observation']['temp_c'];
			var conditions = parsed_json['current_observation']['weather'];
      var wind_speed = parsed_json['current_observation']['wind_mph'] ;
			var humidity = parsed_json['current_observation']['relative_humidity'] ;

			// set states for fields so they could be rendered later on
			this.setState({
				locate    : location,
				temp      : temp_c,
				cond      : conditions,
        WINDSPEED : wind_speed,
				HUMIDITY  : humidity

			});

	}

  /* this method takes in the JSON to be manipluated */
	parseIPResponse = ( parsed_json ) =>
	{

			// ip
			var parsedIP       = parsed_json['ip'];

			// city
			var parsedCity     = parsed_json['city'];

			// region
			var parsedRegion   = parsed_json['region'];

			// country
			var parsedCountry  = parsed_json['country'];

			// location = latitute + longlitude
			var parsedLocation = parsed_json['loc'];

			// set states for fields so they could be rendered later on
			this.setState({

				COUNTRY  :  parsedCountry,
				CITY     :  parsedCity,
        mapurl   :  "https://www.google.com/maps/embed/v1/place?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=" + parsedLocation

			});

			// a call to fetchWeatherData()
			this.fetchWeatherData();

	}

}
