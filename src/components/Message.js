import React from 'react';

export default (props) => {
	return (
		<div className='talk-bubble tri-right round right-in'>
			<div clasName='talktext'>
				<p>{props.user}: {props.content}</p>
			</div>
		</div>
	)
}
