import React from 'react';
import { getTrimLowerString } from '../../../../../utils/getTrimLowerString';
import { IUser } from '../../../../../interfaces/chat';

interface IProps {
	name: string;
	user: IUser;
	message: string;
}

function Message({ user, message, name }: IProps) {
	const itsMe = getTrimLowerString(user.name) === getTrimLowerString(name);
	const className = itsMe ? 'me' : 'user';

	return (
		<div className={`message ${className}`}>
			<span className="user">{user.name}</span>

			<div className="text">{message}</div>
		</div>
	);
}

export default Message;
