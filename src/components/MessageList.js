import React from 'react';
import Message from './Message';

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let allMessages = this.props.messages.map((message, i) => {
			return <Message key={i} user={message.user} content={message.message} />
		});

		return (
			<div>
				{allMessages}
			</div>
		)
	}
}