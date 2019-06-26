// we'll need axios
import axios from 'axios';


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCHING_REQUEST = 'FETCHING_REQUEST';
export const REQUEST_SUCCESFUL = 'REQUEST_SUCCESFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getData = () => dispatch => {
    console.log("in the getData in the action file")
    dispatch({type:FETCHING_REQUEST})
    const request = axios.get(`https://swapi.co/api/people/`);
    request.then(res => {
        console.log(res.data)
        dispatch({type:REQUEST_SUCCESFUL, payload: res.data.results})
    })
    .catch(err => {
        dispatch({type:REQUEST_FAILED, payload: err})
    })
}