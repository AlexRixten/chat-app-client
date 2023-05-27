import { IChatState, TChatActions } from '../../interfaces/chat';
import { EChatActions } from '../../enums/actons.enum';

const initState: IChatState = {
	messages: null,
	message: null,
	searchParams: null,
	users: null,
};

const initialState = { ...initState };

// eslint-disable-next-line default-param-last
export const chatReducer = (state = initialState, action: TChatActions): IChatState => {
	switch (action.type) {
		case EChatActions.SetMessages:
			return {
				...state,
				messages: action.payload,
			};
		case EChatActions.SetMessage:
			return {
				...state,
				message: action.payload,
			};
		case EChatActions.SetSearchParams:
			return {
				...state,
				searchParams: action.payload,
			};
		case EChatActions.SetUsers:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};
