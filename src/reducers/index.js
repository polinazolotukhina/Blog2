import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import  postReducer  from './postReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    post: postReducer
});

export default rootReducer;
