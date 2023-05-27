import { combineReducers } from 'redux';
import { chatReducer } from './reducers/chat';

const rootReducer = combineReducers({
	chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
