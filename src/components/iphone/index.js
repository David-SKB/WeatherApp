// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
// import jquery for API calls
import $ from 'jquery';
// import home tab
import Home from '../home';
import Courts from '../courts';
import Fave from '../fave';
import Friends from '../friends';
import Search from '../search';
export default class Iphone extends Component {
//var Iphone = React.createClass({

/* SELECTED button color is --> #BAD4FF */

/* this constructor sets the initial pages */
constructor(props)
{

		super(props);
		this.state.displayHome = true;
		this.state.displayCourts = false;
		this.state.displayFave = false;
		this.state.displayFriends = false;
		this.state.displaySearch = false;

		this.state.homeStatus = false;
		this.state.tennisStatus = true;
		this.state.faveStatus = true;
		this.state.friendStatus = true;
		this.state.searchStatus = true;

}

	/* the render method allows us to switch between scenes */
	// the main render method for the iphone component
	render()
        {

            // check if temperature data is fetched, if so add the sign styling to the page
            //const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

            return (
                <div class={ style.container }>
                    <div class={ style.navbar }>
                    <div class = { style.navcol } >
                        { this.state.homeStatus ? <button class = { style.homebutton } onClick = { this.homeState } > </button> : null }
                        { !this.state.homeStatus ? <button class = { style.homebuttonalt } > </button> : null }
                    </div>

                    <div class = { style.navcol }>
                        { this.state.tennisStatus ? <button class = { style.tennisbutton } onClick = { this.tennisState } > </button> : null }
                        { !this.state.tennisStatus ? <button class = { style.tennisbuttonalt } > </button> : null }
                    </div>
                    <div class = { style.navcol }>
                        { this.state.friendStatus ? <button class = { style.friendbutton } onClick = { this.friendState } > </button> : null }
                        { !this.state.friendStatus ? <button class = { style.friendbuttonalt } > </button> : null }
                    </div>
                    <div class = { style.navcol }>
                        { this.state.searchStatus ? <button class = { style.searchbutton } onClick = { this.searchState } > </button> : null }
                        { !this.state.searchStatus ? <button class = { style.searchbuttonalt } > </button> : null }
                    </div>
                    <div class = { style.navcol }>
                        { this.state.faveStatus ? <button class = { style.favebutton } onClick = { this.faveState } > </button> : null }
                        { !this.state.faveStatus ? <button class = { style.favebuttonalt } > </button> : null }
                    </div>
                </div>

                <div class={ style.tab }> { this.state.displayHome ? <Home/ > : null } </div>
                <div class={ style.tab }> { this.state.displayCourts ? <Courts/ > : null } </div>
                <div class={ style.tab }> { this.state.displayFave ? <Fave/ > : null } </div>
                <div class={ style.tab }> { this.state.displayFriends ? <Friends/ > : null } </div>
                <div class={ style.tab }> { this.state.displaySearch ? <Search/ > : null } </div>

            </div>

        );

	}

	/* sets the page to the home page */
  homeState = () => {
	this.setState({
		homeStatus : false,
                      tennisStatus : true,
                      faveStatus : true,
                      friendStatus : true,
                      searchStatus : true,

                      displayHome : true,
                      displayCourts : false,
                      displayFave : false,
                      displayFriends : false,
                      displaySearch : false,
	});
}
	/* sets the page to the local courts page */
  tennisState = () => {
	this.setState({
		homeStatus : true,
                      tennisStatus : false,
                      faveStatus : true,
                      friendStatus : true,
                      searchStatus : true,

                      displayHome : false,
                      displayCourts : true,
                      displayFave : false,
                      displayFriends : false,
                      displaySearch : false,
	});
}

	/* sets the page to the FAV page */
  faveState = () => {
	this.setState({
		homeStatus: true,
                      tennisStatus : true,
                      faveStatus : false,
                      friendStatus : true,
                      searchStatus : true,

                      displayHome : false,
                      displayCourts : false,
                      displayFave : true,
                      displayFriends : false,
                      displaySearch : false,
	});
}

	/* sets the page to the social media page */
	friendState = () => {
	this.setState({
		homeStatus: true,
                      tennisStatus : true,
                      faveStatus : true,
                      friendStatus : false,
                      searchStatus : true,

                      displayHome : false,
                      displayCourts : false,
                      displayFave : false,
                      displayFriends : true,
                      displaySearch : false,
	});
}

	/* sets the page to the search page */
  searchState = () => {
	this.setState({
		homeStatus: true,
                      tennisStatus : true,
                      faveStatus : true,
                      friendStatus : true,
                      searchStatus : false,

                      displayHome : false,
                      displayCourts : false,
                      displayFave : false,
                      displayFriends : false,
                      displaySearch : true,
	});
}

}
