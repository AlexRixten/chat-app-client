import React, { useState } from 'react';
// @ts-ignore
import emojisIcon from '../../../../assets/icons/emoji.svg';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { messageSelector } from '../../../../store/selectors/chatSelector';
import { setMessageAction } from '../../../../store/actions/chat';

function Emojis() {
	const dispatch = useAppDispatch();
	const message = useAppSelector(messageSelector);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openHandler = () => {
		setIsOpen(!isOpen);
	};

	const onEmojiClick = ({ emoji }: EmojiClickData) => {
		const messageEmoji = `${message} ${emoji}`;
		dispatch(setMessageAction(messageEmoji));
		setIsOpen(!isOpen);
	};

	return (
		<div className="emojis">
			<img src={emojisIcon} alt="emojis" onClick={openHandler} />
			{isOpen && (
				<div className="emoji">
					<EmojiPicker onEmojiClick={onEmojiClick} />
				</div>
			)}
		</div>
	);
}

export default Emojis;
