import React from 'react';

export default (props) => {
	return (
		<div className={`${props.left} talk-bubble tri-right round right-in`}>
			<div className='talktext'>
				<p>{props.user}: {props.content}</p>
			</div>
		</div>
	)
}
