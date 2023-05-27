import React from 'react';
import Message from './Message';
import { IMessage } from '../../../../interfaces/chat';
import './Messages.scss';

interface IProps {
	messages: IMessage[];
	name: string;
}

const Messages = ({ messages, name }: IProps) => {
	return (
		<div className="messages">
			{messages.map(({ user, message }, index) => (
				<Message key={index} user={user} message={message} name={name} />
			))}
		</div>
	);
};

export default Messages;
