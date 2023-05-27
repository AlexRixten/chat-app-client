import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

interface IValues {
	name?: string;
	room?: string;
}

function RoomForm() {
	const navigate = useNavigate();

	const [values, setValues] = useState<IValues | null>();

	const handleSubmit = () => {
		navigate(`/chat?name=${values?.name}&room=${values?.room}`);
	};

	const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...(values || {}), [name]: value });
	};

	return (
		<form className="room-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={values?.name || ''}
					onChange={handleChange}
					autoComplete="off"
					required
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					name="room"
					placeholder="Room"
					value={values?.room || ''}
					onChange={handleChange}
					autoComplete="off"
					required
				/>
			</div>
			<div className="form-group">
				<button type="submit" className="from-button">
					Sign In
				</button>
			</div>
		</form>
	);
}

export default RoomForm;
