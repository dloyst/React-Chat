import React from 'react';
import { Link } from 'react-router';
import Modal from './Modal';
import Nav from './Nav';

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
	}

	render() {
		return (
			<div>
				<Nav />
				<Modal />
				<li><Link to='/chat'>Chat App</Link></li>
				{this.props.children}
			</div>
		)
	}

}
