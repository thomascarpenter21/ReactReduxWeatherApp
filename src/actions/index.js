import axios from "axios";

const API_KEY = '2ac02da2af22994d';
const ROOT_URL = `http://api.wunderground.com/api/=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// the creation of const limits the chance for bugs
//below we are creating an action
export function fetchWeather(city) {
	const url = `${ROOT_URL}/conditions/state/${city}.json`;
	const request = axios.get(url); 

	console.log("Request:", request);

	return {
		type: 'FETCH_WEATHER',
		payload: request
	};
}

//http://api.wunderground.com/api/2ac02da2af22994d/conditions/q/CA/San_Francisco.json