import { combineReducers } from 'redux';

import HelloWorldReducer from './helloworld';

const allReducers = combineReducers({
	helloworld : HelloWorldReducer
});

export default allReducers;