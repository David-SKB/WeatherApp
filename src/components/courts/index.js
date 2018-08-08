// import preact
//<iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?zoom=10&center=51.5074,-0.1278&key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts" allowfullscreen></iframe>
//51.5240671,-0.0425632
//<iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+limehouse" allowfullscreen></iframe>
//<iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+limehouse" allowfullscreen></iframe>
//            <iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+limehouse" allowfullscreen></iframe>

import { h, render, Component } from 'preact';
import style from '../iphone/style';
import $ from 'jquery';
export default class Courts extends Component {

    constructor(props)
    {

        super(props);
        // declaring variables needed for later
        this.state.CITY = "" ;
        this.state.court = "";

        // gets IP via host location
        this.fetchIPInfo() ;

        //this.fetchPlace() ;

    }

    render()
    {
        this.appendURL() ;


        return (
            <div>
                <h1 class={ style.h69 }> Nearest Courts </h1>
                {/*<h1 class={ style.h69 }>{this.state.CITY}</h1>
                <h1 class={ style.h69 }>{this.state.text}</h1>*/}

                <iframe width="370" height="600" frameborder="0" style="border:0" src={this.state.url}  allowfullscreen></iframe>
                <h5 class={ style.h70 }> To favourite a court - click on one and press save </h5>

            </div>

        );

    }

    fetchPlace = () =>
    {

        var url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJrTLr-GyuEmsRBfy61i59si0&key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts";
        $.ajax({

                url: url,
                dataType: "json",
                success : this.parsePlaceResponse,
                error : function(req, err){ console.log('API call failed --> ' + err); }

        })

        // once the data grabbed, hide the button
        this.setState({ display: false });

    }

    parsePlaceResponse = ( parsed_json ) =>
    {

        var longName = parsed_json['result']['address_components']['long_name'] ;
        console.log( longName ) ;

    }

    /* this method allows us to get the IP address from the host device */
    fetchIPInfo = () =>
    {

        var url = "http://ipinfo.io";
        $.ajax({
                url: url,
                dataType: "jsonp",
                success : this.parseIPResponse,
                error : function(req, err){ console.log('API call failed ' + err ); }
        })

    }

    /* this methods handles the returned JSON from the API */
    parseIPResponse = ( parsed_json ) =>
    {


        // city
        var parsedCity = parsed_json['city'];

        // set states for fields so they could be rendered later on
        this.setState({

                CITY     :  parsedCity

        });



    }

    /* this method changes the search key depending on
       the condition recieved from the weather API  */
    changeCourt = () =>
    {

        var str   = this.state.cond ;
        var check = false;
        if ( str == "Heavy Rain" || str == "Light Rain" || str == "Light Showers" || str == "Showers")
        {

            check = true;

        }

        if ( false )
        {

          this.state.court =  "indoor" ;

        }

    }

    // this method allows us to add a paramenter to the end of the URL
    appendURL = () => {

        this.changeCourt() ;
        this.state.url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q="+ this.state.court +"tennis+courts+near" + this.state.CITY ;

    }

}
