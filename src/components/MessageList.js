import React from 'react';
import Message from './Message';

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let user = this.props.user;
		let allMessages = this.props.messages.map((message, i) => {
			return message.user === user ?
				(
					<Message key={i} left='right' user={message.user} content={message.message} />
				) :
				(
					<Message key={i} left='left' user={message.user} content={message.message} />
				)
		});

		return (
			<div>
				{allMessages}
			</div>
		)
	}
}