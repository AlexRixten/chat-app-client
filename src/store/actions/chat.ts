import {
	IMessage,
	ISearchParams,
	ISetMessageAction,
	ISetMessagesAction,
	ISetSearchParamsAction,
	IUser,
	IUsersAction,
} from '../../interfaces/chat';
import { EChatActions } from '../../enums/actons.enum';

export const setMessagesAction = (payload: IMessage[] | null): ISetMessagesAction => ({
	type: EChatActions.SetMessages,
	payload,
});

export const setMessageAction = (payload: string | null): ISetMessageAction => ({
	type: EChatActions.SetMessage,
	payload,
});

export const setSearchParamsAction = (payload: ISearchParams): ISetSearchParamsAction => ({
	type: EChatActions.SetSearchParams,
	payload,
});

export const setUsersAction = (payload: IUser[] | null): IUsersAction => ({
	type: EChatActions.SetUsers,
	payload,
});
