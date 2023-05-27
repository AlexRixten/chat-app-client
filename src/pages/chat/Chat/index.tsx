import React from 'react';
import Emojis from './Emojis';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { messageSelector, messagesSelector, searchParamsSelector } from '../../../store/selectors/chatSelector';
import { setMessageAction } from '../../../store/actions/chat';
import { socket } from '../index';
import Messages from './Messages';

function Chat() {
	const dispatch = useAppDispatch();
	const message = useAppSelector(messageSelector);
	const params = useAppSelector(searchParamsSelector);
	const messages = useAppSelector(messagesSelector);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		socket.emit('send_message', { message, params });
		dispatch(setMessageAction(null));
	};

	const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setMessageAction(value));
	};

	if (!params || !messages) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Messages messages={messages} name={params.name} />
			<form className="chat-form" onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={message || ''}
						onChange={handleChange}
						autoComplete="off"
						required
					/>
				</div>
				<Emojis />
				<div className="submit-btn">
					<input type="submit" value="Send message" />
				</div>
			</form>
		</>
	);
}

export default Chat;
