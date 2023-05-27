import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getObjectSearchParams } from '../../utils/getObjectSearchParams';
import './Chat.scss';
import Chat from './Chat';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { messagesSelector, searchParamsSelector, usersSelector } from '../../store/selectors/chatSelector';
import { setMessagesAction, setSearchParamsAction, setUsersAction } from '../../store/actions/chat';
import { IResponseMessage, IResponseUsers, ISearchParams } from '../../interfaces/chat';
import { ERoutes } from '../../enums/routes.enum';

const io = require('socket.io-client');

export const socket = io.connect('http://localhost:3001');

function ChatPage() {
	const { search } = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const messages = useAppSelector(messagesSelector);
	const params = useAppSelector(searchParamsSelector);
	const users = useAppSelector(usersSelector);

	useEffect(() => {
		const params = getObjectSearchParams(search);
		socket.emit('join', params);
		dispatch(setSearchParamsAction(params as unknown as ISearchParams));
	}, [search, dispatch]);

	socket.on('message', ({ data }: IResponseMessage) => {
		dispatch(setMessagesAction([...(messages || []), data]));
	});

	socket.on('room', ({ data }: IResponseUsers) => {
		dispatch(setUsersAction(data.users));
	});

	const leftRoomHandler = () => {
		socket.emit('left_room', { params });
		navigate(`${ERoutes.Room}`);
	};

	if (!params) {
		return <div>Loading...</div>;
	}

	return (
		<div className="chat-wrapper">
			<div className="chat-header">
				<div className="header-room">{params.room}</div>
				<div className="header-users">{users?.length} users in this room</div>
				<button className="header-btn" onClick={leftRoomHandler}>Left the room</button>
			</div>
			<Chat />
		</div>
	);
}

export default ChatPage;
