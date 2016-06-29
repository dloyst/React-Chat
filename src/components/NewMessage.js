import React from 'react';
const socket = io();

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.sendMessage = this.sendMessage.bind(this);
		this.messageValue = this.messageValue.bind(this);
		this.state = {user: 'Dave', message: ''};
	}

	sendMessage(e) {
		e.preventDefault();
		console.log(this.state);
		socket.emit('sendMessage', this.state);
		this.setState({ message: '' });
	}

	messageValue(e) {
		this.setState({ message: e.target.value });
	}

	render() {
		return (
		  <form onSubmit={this.sendMessage}>
		    <input id="m" type='text' autocomplete='off' placeholder='Send a Message!'
		    	onChange={this.messageValue}
		    	value={this.state.message}/>
		    <button>Send</button>
		  </form>
		)
	}
}