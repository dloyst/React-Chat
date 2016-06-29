import React from 'react';
import MessageList from './MessageList';
import NewMessage from './NewMessage';

const socket = io();

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				{ 
					user: null,
					message: null
				}
			]
		}

		let that = this;
    socket.on('addMessage', (message) => {
    	let currentMessages = [...that.state.messages].concat({user: message.user, message: message.message});
      that.setState({ messages: currentMessages });
    });
	}

	render() {

		let allMessages = this.state.messages;

		return (
			<div>
				<MessageList messages={allMessages} />
				<NewMessage />
			</div>
		)
	}
}