import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SayHello } from '../actions/index'

class HelloWorld extends React.Component {
	handleChange(e) {
			const val = e.target.value;
			this.props.SayHello(val);
	}
	render() {
		const initial_data = this.props.helloText.default_text;
		return(
			<div>
				<p> Say something : {initial_data} </p>
				 <input type = "text" value = {initial_data} 
               onChange = {this.handleChange.bind(this)} />
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		helloText: state.helloworld
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({SayHello: SayHello}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HelloWorld);
