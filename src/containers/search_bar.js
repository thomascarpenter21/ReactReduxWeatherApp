import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		//console.log(event.target.value);
		this.setState({ term: event.target.value})
	}

	onFormSubmit(event) {
		event.preventDefault();

		// we need to go and fetch weather data
		// call the action creator
		this.props.fetchWeather(this.state.term);
		//below clears the search input
		this.setState({term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
			<input
			// the state will be able to change over time with a change handler 
			placeholder="Get a five-day forecast in your favorite cities"
			className="form-control"
			//the two below lines make it a controlled component
			//the inputs value is coming from this.state.term
			value={this.state.term}
			onChange={this.onInputChange} />
			<span className="input-group-btn">
			 <button type="submit" className="btn btn-secondary">submit</button>
			 </span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);


}

export default connect(null, mapDispatchToProps)(SearchBar);





