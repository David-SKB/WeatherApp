// import preact
import { h, render, Component } from 'preact';
import style from '../iphone/style';
import React from 'react';

/* imports that allow us to use twitter widget */
import ReactDOM from 'react-dom';
import { Timeline } from 'react-twitter-widgets'
export default class Friends extends Component {

	// rendering a function when the button is clicked
	// this will render our twitter feed requested from our stakeholder
	render() {

		return (
			      <div>
			          <h1 class={ style.h419 }>Social Feed</h1>
								<Timeline
												dataSource={{
												sourceType: 'list',
												ownerScreenName: 'Vaghela_d',
												slug: 'tp'
												}}
												options={{
													height: '600',
													width: '370'
												}}
												onLoad={() => console.log('Timeline is loaded!')}
																																						/>
			      </div>


		);
	}
}
