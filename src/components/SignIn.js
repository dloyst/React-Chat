import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';	
import Nav from './Nav';
import Modal from './Modal';
import App from './App';

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.createUser = this.createUser.bind(this);
		this.startChat = this.startChat.bind(this);
		this.state = {modalView: true, chatView: 'none', user: ''};
	}

	createUser(user) {
		this.setState({modalView: 'none', chatView: true, user: user});
	}

	startChat() {
		this.setState({chatView: 'none'});
	}

	render() {
		return (
			<div>
				<Nav username={this.state.user}/>

				<div style={
					{
						display: this.state.modalView,
						textAlign: 'center'
					}
				}>
					<Modal create={this.createUser} />
				</div>

				<div style={{textAlign: 'center'}}>
					<Link 
						to={`/app/${this.state.user}`} 
						onClick={this.startChat} >
						<Button 
							bsStyle="primary"
		          bsSize="large"
		          style={{display: this.state.chatView}}>
								Start Chatting!
						</Button>
					</Link>
				</div>

				<div className='chatBox'>
					{this.props.children}
				</div>

			</div>
		)
	}
}
