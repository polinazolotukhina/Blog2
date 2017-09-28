import {
    NEW_POST,
    DELETE_POST,
    SEARCH_POST
} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function postReducer(state = initialState.post, action) {
    switch (action.type) {
        case NEW_POST:
                return {
                  ...state,
                  post: [...state.post, action.post],
                  index: state.index+1
                };
        case DELETE_POST:
                return {
                  ...state,
                  post: state.post.filter(function(a){
                      return a.index != action.post.index
                  })
                };
        case SEARCH_POST:
                return {
                  ...state,
                  search: state.post.filter(function(a){
                      return a.title == action.input
                  })
                };
        default:
            return state;
    }
}
