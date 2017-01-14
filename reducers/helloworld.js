export default function(state = {default_text : "Inital text"}, action) {
	switch(action.type) {
		case 'Said_Hello':
			return Object.assign({}, state, { default_text :  action.payload } );
			break;
	}
	return state;
}