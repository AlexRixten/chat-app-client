import { EChatActions } from '../enums/actons.enum';

export interface IDataUsersResponse {
	users: IUser[];
}
export interface IUser {
	name: string;
	room?: string;
}

export interface IMessage {
	user: IUser;
	message: string;
}

export interface IResponseMessage {
	data: IMessage;
}
export interface IResponseUsers {
	data: IDataUsersResponse;
}

export interface ISearchParams {
	name: string;
	room: string;
}

export interface IChatState {
	messages: IMessage[] | null;
	message: string | null;
	searchParams: ISearchParams | null;
	users: IUser[] | null;
}

interface ISetMessagesAction {
	type: EChatActions.SetMessages;
	payload: IMessage[] | null;
}

interface ISetMessageAction {
	type: EChatActions.SetMessage;
	payload: string | null;
}

interface ISetSearchParamsAction {
	type: EChatActions.SetSearchParams;
	payload: ISearchParams;
}

interface IUsersAction {
	type: EChatActions.SetUsers;
	payload: IUser[] | null;
}

export type TChatActions = ISetMessagesAction | ISetMessageAction | ISetSearchParamsAction | IUsersAction;
