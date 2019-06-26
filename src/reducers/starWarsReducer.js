import { FETCHING_REQUEST, REQUEST_SUCCESFUL, REQUEST_FAILED } from  "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error:''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_REQUEST : 
      return {
          ...state,
          isFetching: true,
          error:''
      }

    case REQUEST_SUCCESFUL :
      return {
          ...state,
          characters: action.payload,
          isFetching: false,
          error:''
      }

    case REQUEST_FAILED :
      return {
          ...state,
          isFetching: false,
          error: action.payload
      }  

    default:
      return state;
  }
};
