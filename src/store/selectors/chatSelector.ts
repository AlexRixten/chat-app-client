import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const state = ({ chat }: RootState) => chat;

export const messagesSelector = createSelector(state, ({ messages }) => messages);
export const messageSelector = createSelector(state, ({ message }) => message);
export const searchParamsSelector = createSelector(state, ({ searchParams }) => searchParams);
export const usersSelector = createSelector(state, ({ users }) => users);
